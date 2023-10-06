// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperOptions ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerOptions ="abcdefghijklmnopqrstuvwxyz"
var numOptions="0123456789"
var spCharOptions = "~!@#$%^&*()-_=+[]{}/?<>"

// Write password to the #password input

function generatePassword(){
console.log("clicked");

//Password Length  promt
var passLength = prompt("Please specify desired password length \n *Must be a number between 8 - 128")
//console.log(passLength)
  
if (passLength < 8 || passLength > 128) {
alert("Please enter a number within the speified range")
return "Password not gerenated, try again."
}
if (!passLength) {
alert("Length required")
return "Password not gerenated, try again."
}
/* define if not a number
if (passLength ) {
    alert("Input nueric values only")
}*/
;

    
//Lower Case Prompt
var lowerCase = confirm("Include lower case letters?");
    //console.log(lowerCase) 

// Upper Case Prompt
var upperCase = confirm("Include UPPER CASE letters?");
    //console.log(upperCase) 
   
//Numeric Values Prompt
var numValues = confirm("Include numerical values?");
  // console.log(numValues) 
   
//Special Characters Prompt
   var spCharacters = confirm("Include special characters?");

//Input Validation 
if (lowerCase == false && upperCase == false && numValues == false && spCharacters == false) {
 alert('Password cannot be generated, please accept at least one criteria')
 } ;


// Match user choice with options

var userChoice = "";
if (lowerCase) userChoice += lowerOptions;
if (upperCase) userChoice += upperOptions;
if (numValues) userChoice += numOptions;
if (spCharacters) userChoice += spCharOptions; 

// Create password
var createPass = "";
for (let i = 0; i < parseInt(passLength); i++) {
    var uniquePass = Math.floor(Math.random() * userChoice.length);
    createPass += userChoice.charAt(uniquePass);
    
}

return createPass;
     
}


// Display password


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

