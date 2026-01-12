//Check for Rotation Given two strings, check if one is a rotation of another. Input: "ABCD", "CDAB" → Output: true

function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const concatenated = str1 + str1;
    return concatenated.includes(str2);
}

// Example usage:
const string1 = "ABCD";
const string2 = "CDAB";
const result = isRotation(string1, string2);
console.log(result); // Output: true

