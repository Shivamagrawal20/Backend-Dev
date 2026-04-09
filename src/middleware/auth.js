const authMiddleware = (req, res, next) => {
    // Simulated auth (since no DB required for assignment)
    const user = {
      id: 1,
      role: "user" // change to "admin" to test
    };
  
    req.user = user;
  
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    next();
  };
  
  module.exports = authMiddleware;