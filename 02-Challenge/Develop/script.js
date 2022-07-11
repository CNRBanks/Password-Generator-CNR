// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. Prompt the user for the password criteria
  //   a. password length 8 - 128
  var passwordLength = prompt("Please enter the number of characters that you would like to be used in your password");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid")
  }
  else {
    //   b. lowercase, uppercase, numbers, special characters
    var useUpperCase = confirm("Use uppercase")
    var useLowerCase = confirm("use lowercase")
    var useSymbols = confirm("use symbols")
    var useNumbers = confirm("use numbers")
    // 2. Validate the input.
    var validCharacters = ""
    if (useUpperCase) {
      validCharacters = validCharacters + "abcdefghijklmnopqrstuvxyz".toUpperCase()
    }
    if (useLowerCase) {
      validCharacters = validCharacters + "abcdefghijklmnopqrstuvxyz"
    }
    if (useSymbols) {
      validCharacters = validCharacters + "!@#$%^&*()_+?><:;.,`~"
    }
    if (useNumbers) {
      validCharacters = validCharacters + "1234567890"
    }
    // 3. Generate the password based on the criteria - for the number of times given then generate a character and add it the total password
    // var validCharacters = "abcdefghijklmnopqrstuvxyz"
    var password = ""
    while (password.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * validCharacters.length)
      var randomCharacter = validCharacters[randomIndex]
      password = password + randomCharacter
    }


    // 4. Display password to the page
    return password;
  }
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














// for (var generateBtn of
//   document.getElementsByClassName("btn"))
//   generateBtn.addEventListener("click", howManyChars);
//   function howManyChars() {
//      let generateBtn = prompt("Please enter the number of characters that you would like to be used in your password");
//   }

// var generateBtn = document.querySelector("#generate");


// function generatePassword() {
//   console.log("Hey! You clicked the button!")
// // 1. Prompt the user for the password criteria
// //   a. password length 8 - 128
// //   b. lowercase, uppercase, numbers, special characters
// // 2. Validate the input.
// // 3. Generate the password based on the criteria
// // 4. Display password to the page


//   return "Generated password will go here!";
// }
// // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
