

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


var length = ("8-128")
var lowercase = ("q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m");
var uppercase = ("Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M");
var numbers = ("1,2,3,4,5,6,7,8,9,0");
//Unicode????? for characters
var characters =

//confirm funtion??

//mathfloor mathrandom function



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
