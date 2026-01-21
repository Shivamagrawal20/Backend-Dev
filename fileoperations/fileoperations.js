// Exercise 1: File Operations
// Create a Node.js program that reads a text file, counts the number of words, and writes the
// count to a new file.

const fs = require("fs");
fs.readFile("input.txt",(err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const words = data
        .trim()
        .split(/\s+/)   
        .filter(word => word.length > 0);

    const wordCount = words.length;

    const outputText = `Word Count: ${wordCount}`;

    fs.writeFile("output.txt", outputText, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Word count written to output.txt successfully");
    });
});










