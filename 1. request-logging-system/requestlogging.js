const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'requests.log');

const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const log = `${new Date().toISOString()} | ${req.method} ${
      req.url
    } | ${res.statusCode} | ${Date.now() - start}ms\n`;

    fs.appendFile(logFile, log, (err) => {
      if (err) console.error('Log write error');
    });
  });

  next();
};

module.exports = requestLogger;