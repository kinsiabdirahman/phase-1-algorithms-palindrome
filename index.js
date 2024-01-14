function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split("");
  const reverseLetters = arrayOfLetters.reverse();
  const reverseString = reverseLetters.join("");

  // Add your pseudocode here
  if (word === reverseString) {
    return true;
  } else {
    return false;
  }
}

// This function checks if a given word is a palindrome, returning true if it reads the same forwards and backwards, and false otherwise.
// It accomplishes this by converting the word to an array, reversing it, and comparing the original word with the reversed version.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
