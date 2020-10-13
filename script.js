var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num="0123456789";
var sym="!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

var passwordLength = document.getElementById('passwordLength');
var uppercaseBox = document.getElementById('uppercase');
var numberBox = document.getElementById('num');
var symbolBox = document.getElementById('sym');
var submit = document.getElementById('submit');
var generatedPassword = document.getElementById('password');


//determinds the the length of password and if it includes numbers or symbols uses ternary operators instead of if else for cleaner code
submit.addEventListener("click", function conditionals() {
  var characters = lowercase;
  (uppercaseBox.checked) ? characters += uppercase : '';
  (numberBox.checked) ? characters += num : ''; 
  (symbolBox.checked) ? characters += sym : ''; 
  generatedPassword.value = generatePassword(passwordLength.value, characters) 

/* does the same thing
  if (uppercaseBox.checked) {
  characters += uppercase;z
} if (numberBox.checked) {
  characters += num;
} if (symbolBox.checked) {
  characters += sym;
}     
generatedPassword.value = generatePassword(passwordLength.value, characters) */
});


//copies text
copy.addEventListener("click", function copy() {
  var copyText = document.getElementById('password');
  copyText.select();
  document.execCommand("copy");
  alert("Copied Password: " + copyText.value);

});

//randomly selects characters and adds to password sting based on length 
function generatePassword(length,characters){
  var password = '';
  for(var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
