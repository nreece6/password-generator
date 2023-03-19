// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
//var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var charsetAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var charsetNoSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var charsetNoNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var charsetNoSpecialNoNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charsetLowerOnly = "abcdefghijklmnopqrstuvwxyz"
function writePassword() {
  var length = window.prompt ("How many characters does your password need to be? Enter a number between 8 and 128.")
  if (length < 8 || length > 128) {
    
  }
  var useUpper = window.confirm ("Does your password require upper case letters?")
  var useNumber = window.confirm ("Does your password require numbers?")
  var useSpecial = window.confirm ("Does your password require special characters?")

  if (useUpper && useNumber && useSpecial) {
    // generate password with all character
  } else if (useUpper && useNumber && !useSpecial ) {
    // generate password with all characters other than special characters
  } else if (useUpper && !useNumber && useSpecial) {
    // generate password with all characters other than numbers
  } else if (!useUpper && useNumber && useSpecial) {
    // generate password with all characters other than uppercase
  } else if (useUpper && !useNumber && !useSpecial) {
    // generate password without number or special characters
  } else if (!useUpper && useNumber && !useSpecial) {
    // generate password without uppercase or special characters
  } else if (!useUpper && !useNumber && useSpecial) {
    // generate password without uppercase or numbers
  } else {
    //generate password with lowercase only
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordChar = window.prompt
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
