/*Create a Node.js program that reads a text file, counts the number of words, and writes the
 count to a new file.*/
 const fs = require('fs');

 // Content to write
 const content = 'This is sample content for our file.';
 
 // Write to input file
 fs.writeFile('input.txt', content, (err) => {
     if (err) {
         console.error('Error writing file:', err);
         return;
     }
 
     console.log('File written successfully!');
 
     // Read the file AFTER writing
     const data = fs.readFileSync('input.txt', 'utf8');
 
     // Count words
     const wordCount = data.trim().split(/\s+/).length;
 
     // Write result to output file
     fs.writeFileSync('output.txt', `Total words: ${wordCount}`);
 
     console.log('Word count:', wordCount);
 });