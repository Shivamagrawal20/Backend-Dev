const fs = require('fs');

const logFile = "systemInfo.log";

function systemInfoLogger() {
    const info = {
        platform: process.platform,
        cpuCores: require('os').cpus().length,
        totalMemory: require('os').totalmem(),
    }
    const log = 'System Information:\n' +
        `Platform: ${info.platform}\n` +
        `CPU Cores: ${info.cpuCores}\n` +
        `Total Memory: ${info.totalMemory / (1024 * 1024 * 1024)} GB\n\n` ;

    fs.appendFile(logFile, log, (err) => {
        if (err) {
            console.error('Error writing to log file', err);
        } else {
            console.log('System information logged successfully.');
        }
    });
}

module.exports = systemInfoLogger;