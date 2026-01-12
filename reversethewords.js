// Reverse Words in a Sentence Input: "Java is fun" → Output: "fun is Java"

function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}   

// Example usage:
const input = "Java is fun";
const output = reverseWords(input);
console.log(output); 