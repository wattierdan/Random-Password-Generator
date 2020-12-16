var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789012345678901234567890123456789";
var sym = "!#$%&'()*+,-./:;<=>?@[]_`{|}~!#&";
var allChars = lowercase + uppercase + num + sym

var passwordLength = document.getElementById('passwordLength');
var uppercaseBox = document.getElementById('uppercase');
var lowercaseBox = document.getElementById('lowercase')
var numberBox = document.getElementById('num');
var symbolBox = document.getElementById('sym');
var submit = document.getElementById('submit');
var generatedPassword = document.getElementById('password');

//when generate button is clicked conditionals are cheched
submit.addEventListener("click", function conditionals() {
  var characters = '';
  var garanteed = '';
  if (lowercaseBox.checked) {
      characters += lowercase
      garanteed += randomChar(lowercase)
  }
  if (uppercaseBox.checked) {
      characters += uppercase
      garanteed += randomChar(uppercase)
  }
  if (numberBox.checked) {
      characters += num 
      garanteed += randomChar(num)
  }
  if (symbolBox.checked) {
      characters += sym
      garanteed += randomChar(sym)
  }
  //a shortened verson of the password is created
  var tempPass = generatePassword((passwordLength.value - garanteed.length), (characters))
  //garanteed characters are added to password
  var passShuffle = tempPass + garanteed
  //passwords characters are shuffled
  var shuffled = passShuffle.split('').sort(function(){return 0.5-Math.random()}).join('');
  //shuffled password is displayed
  generatedPassword.value = shuffled
});
//generates a password
function generatePassword(length,characters){
  var password = ''
  console.log(password)
  for(var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
//randomly selects a character from an array
function randomChar(array) {
  return array[Math.floor(Math.random() * array.length)]
}
//copies text
copy.addEventListener("click", function copy() {
  var copyText = document.getElementById('password');
  copyText.select();
  document.execCommand("copy");
  alert("Copied Password: " + copyText.value);
});

