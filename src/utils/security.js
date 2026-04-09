const escape = require('escape-html');

exports.sanitizeInput = (input) => {
  if (typeof input !== "string") return input;
  return escape(input);
};