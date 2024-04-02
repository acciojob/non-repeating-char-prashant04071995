function firstNonRepeatedChar(str) {
    // Create an object to store the count of each character
    let charCount = {};
    
    // Iterate through the string and count each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // If all characters are repeated or the string is empty, return null
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
