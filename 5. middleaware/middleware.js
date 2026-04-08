const sanitizeInput = (req, res, next) => {
    const sanitize = (value) => {
      if (typeof value === 'string') {
        return value
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "")
          .replace(/"/g, "");
      }
      return value;
    };
  
    // Sanitize body
    for (let key in req.body) {
      req.body[key] = sanitize(req.body[key]);
    }
  
    next();
  };
  
  module.exports = sanitizeInput;