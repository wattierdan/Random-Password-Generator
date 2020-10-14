var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num="01234567890123456789";
var sym="!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

var passwordLength = document.getElementById('passwordLength');
var uppercaseBox = document.getElementById('uppercase');
var lowercaseBox = document.getElementById('lowercase')
var numberBox = document.getElementById('num');
var symbolBox = document.getElementById('sym');
var submit = document.getElementById('submit');
var generatedPassword = document.getElementById('password');


//when generate button is clicked conditionals are cheched and added to characters string
//generated password determined by password length value and characters value 
submit.addEventListener("click", function conditionals() {
  var characters = '';
  (lowercaseBox.checked) ? characters += lowercase : '';
  (uppercaseBox.checked) ? characters += uppercase : '';
  (numberBox.checked) ? characters += num : ''; 
  (symbolBox.checked) ? characters += sym : ''; 
  generatedPassword.value = generatePassword(passwordLength.value, characters) 
});

//randomly selects characters and adds to password sting based on length 
function generatePassword(length,characters){
  var password = '';
  for(var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

//copies text
copy.addEventListener("click", function copy() {
  var copyText = document.getElementById('password');
  copyText.select();
  document.execCommand("copy");
  alert("Copied Password: " + copyText.value);

});

