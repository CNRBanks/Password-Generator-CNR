var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompts the user for the password criteria
  // requires the password length to be between 8 - 128
  var passwordLength = prompt("Please enter the number of characters that you would like to be used in your password");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid, please type a length between 8 and 128")
    return "Try again!"
  }
  else {
    //  requires at least one of the lowercase, uppercase, numbers, special characters to be selected
    var useUpperCase = confirm("Use uppercase")
    var useLowerCase = confirm("use lowercase")
    var useSymbols = confirm("use symbols")
    var useNumbers = confirm("use numbers")
    // ensures that at least one character type was selected
    if (!useUpperCase && !useLowerCase && !useSymbols && !useNumbers) {
      alert("Invalid, please select at least one character type to use!")
      return "Try again!"
    }
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
    // Generates the password based on the users criteria
    var password = ""
    while (password.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * validCharacters.length)
      var randomCharacter = validCharacters[randomIndex]
      password = password + randomCharacter
    }


    // Displays password to the page
    return password;
  }
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// allows the button to begin the password process
generateBtn.addEventListener("click", writePassword);