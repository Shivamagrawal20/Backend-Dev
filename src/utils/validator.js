const validator = require('validator');

exports.validateEmail = (email) => {
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  return email;
};

exports.validateString = (value) => {
  if (typeof value !== "string") {
    throw new Error("Invalid input type");
  }
  return value.trim();
};