
// declaring variables

var characterAmountRange = document.getElementById('characterAmountRange');
var characterAmountNumber = document.getElementById('characterAmountNumber');
var includeUpper = document.getElementById('includeLowercase');
var includeLower = document.getElementById('includeUppercase');
var includeNumber = document.getElementById('includeNumbers');
var includeSymbol = document.getElementById('includeSymbols');
var form = document.getElementById('passwordGeneratorForm');
var displayPassword = document.getElementById('passwordDisplay');

//adding uppercase, lowercase, etc

var UPPER_CHAR = createArray(65, 90)
var LOWER_CHAR = createArray(97, 122) 
var NUMBER_CHAR = createArray(48, 57)
var SYMBOL_CHAR = createArray(33, 47).concat(
	createArray(58, 64)
	).concat(createArray(91, 96)
  ).concat(createArray(123, 126));

  function createArray(start, end){
    var arr = [];
    for (var i = start; i <= end; i++) {
      arr.push(i);
    }
    console.log(arr);
    return arr;
  }
  
  characterAmountRange.addEventListener('input', getCharacters);
  characterAmountNumber.addEventListener('input', getCharacters);
  
  form.addEventListener('submit', password);
  


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


var lengthEl = ("8-128")
var lowercaseEl = ("q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m");
var uppercaseEl = ("Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M");
var numbersEl = ("1,2,3,4,5,6,7,8,9,0");
//Unicode????? for characters


//confirm funtion??
//return function

//mathfloor mathrandom function
//length fuction
prompt("Choose passoword length, min 8, max 128");
// for (var i = 0; i < langthEl.length; i++) {

}




// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
