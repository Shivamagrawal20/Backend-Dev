const fs = require("fs");

const text = fs.readFileSync("input.txt", "utf8");

// Solution 1 :

const countWords = require("./fileOperations");
countWords("input.txt");
console.log("Word count output created in wordCount.txt\n");

// Solution 2 :

const { capitalizeString, reverseString, countVowels } = require("./stringUtils");
const result = `
Original Text: ${text.trim()}
Capitalized: ${capitalizeString(text.trim())}
Reversed: ${reverseString(text.trim())}
Vowel Count: ${countVowels(text)}
`;

fs.writeFileSync("stringUtils.txt", result);
console.log("String utilities output created in stringUtils.txt\n");

// Solution 3 :

const systemInfoLogger = require("./SysInfoLogger");

setInterval(() => {
    systemInfoLogger();
}, 5000);
console.log("System information logging started, check systemInfo.log for updates every 5s.\n");