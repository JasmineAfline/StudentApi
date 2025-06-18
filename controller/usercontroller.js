const { authSchema } = require("../helpers/validationSchema");
const createError = require("http-errors");
const User = require("../Models/User");

module.exports = {
  registeruser: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body);
      const email = result.email;

      const Exists = await User.findOne({ email: email });
      if (Exists) throw createError.Conflict(`${email} is already registered`);

      const user = new User(result);
      const savedUser = await user.save();

      res.send(savedUser);
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  },

  getuser: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body);
      const email = result.email;

      const Exists = await User.findOne({ email: email });
      if (!Exists) throw createError.NotFound(`${email} is not found`);

      res.send(Exists);
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  },

  postuser: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body);
      const email = result.email;

      const Exists = await User.findOne({ email: email });
      if (Exists) throw createError.Conflict(`${email} is already registered`);

      const user = new User(result);
      const savedUser = await user.save();

      res.send(savedUser);
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  },

  deleteuser: async (req, res, next) => {
    try {
      const email = req.body.email;
      const Exists = await User.findOneAndDelete({ email: email });
      if (!Exists) throw createError.NotFound(`${email} is not found`);

      res.send(`${email} successfully deleted`);
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  }
};


module.exports = {
  registeruser,
  getuser,
  postuser,
  deleteuser
};

