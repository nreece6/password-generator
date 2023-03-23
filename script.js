// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//var charsetAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

//var charsetNoSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

//var charsetNoNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

//var charsetNoSpecialNoNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//var charsetLowerOnly = "abcdefghijklmnopqrstuvwxyz"

function writePassword() {
  var results = ""

  // asks user how many characters they would like in their passowrd. answer must be between 8-128 or they will be prompted again
  var length = window.prompt ("How many characters does your password need to be? Enter a number between 8 and 128.")

  var charCount = parseInt(length)

  if (charCount < 8 || charCount > 128) {
    return writePassword
  }
// ask user what characters they would like to add to the library of possible responses.
  var useUpper = window.confirm ("Does your password require upper case letters?")

  var useNumber = window.confirm ("Does your password require numbers?")

  var useSpecial = window.confirm ("Does your password require special characters?")

  if (useUpper && useNumber && useSpecial) {
    // generate password with all character
    var combinedChar = lowerCase.concat(upperCase, specialChar, num)
  } else if (useUpper && useNumber && !useSpecial ) {
    // generate password with all characters other than special characters
    var combinedChar = lowerCase.concat(upperCase, num)
  } else if (useUpper && !useNumber && useSpecial) {
    // generate password with all characters other than numbers
    var combinedChar = lowerCase.concat(upperCase, specialChar)
  } else if (!useUpper && useNumber && useSpecial) {
    // generate password with all characters other than uppercase
    var combinedChar = lowerCase.concat(specialChar, num)
  } else if (useUpper && !useNumber && !useSpecial) {
    // generate password without number or special characters
    var combinedChar = lowerCase.concat(upperCase)
  } else if (!useUpper && useNumber && !useSpecial) {
    // generate password without uppercase or special characters
    var combinedChar = lowerCase.concat(num)
  } else if (!useUpper && !useNumber && useSpecial) {
    // generate password without uppercase or numbers
    var combinedChar = lowerCase.concat(specialChar)
  } else {
    //generate password with lowercase only
    var combinedChar = lowerCase
  }
  console.log(combinedChar)

// based on the character set library the user requested, generates a random password for the number of characters the user requested
  for (var i = 0; i < charCount; i++) {
    results += combinedChar[Math.floor(Math.random() * combinedChar.length)];
  }
  console.log(results)
  return results

}


function generatePassword() {
  var password = writePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
console.log(passwordText)
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
