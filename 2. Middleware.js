// Middleware to Log Response Time

const responseTimeLogger = (req, res, next) => {
    const start = Date.now();
  
    res.on('finish', () => {
      const time = Date.now() - start;
      console.log(`${req.method} ${req.url} - ${time}ms`);
    });
  
    next();
  };
  
  // use it
  app.use(responseTimeLogger);