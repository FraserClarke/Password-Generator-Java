

//Pseudo
//When button clicked prompt user for criteria
//Prompt length min 8 max 128
//Prompt Character types, choose lowercase,
//uppercase,numeric, and or special characters.
//Answers input shoulb be validated, at least
//one character type be selected.
//Once generated display on page.


//prompt function

//variables
//length
//lower/upper/numbers,charcters

//some logic and function wizardry.






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
