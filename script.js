var userNumber = prompt('Please enter your phone number with dashes');
if (userNumber[3] && userNumber[7] === '-') {
  alert('Your number is valid!');
} else {
  prompt('Please re-enter a valid phone number','(xxx-xxx-xxxx)');
}

var userBirth = prompt('Please enter your birthdate using the format xx/xx/xx');
if (userBirth[2] && userBirth[5] ==='/') {
  alert('Your birth date is valid!');
} else {
  alert('Please re-enter your birth date with the valid format');
};

var postalCode = prompt('Please enter your postal code');
if (postalCode.length === 5 || postalCode[5] === '-') {
  alert('Your postal code is valid!');
} else if (postalCode === NaN){
  alert('Please re-enter your postal code with a valid format');
} else {
  alert('Please re-enter your postal code with a valid format');
}

var martialStatus = prompt('Are you married?');
if (martialStatus == ('Yes' || 'YES' || 'yes')) {
  alert('Woot, you are married.');
} else if (martialStatus == ('No' || 'NO' || 'no')) {
  alert('Sorry to hear.');
} else {
  alert('I can\'t tell if you\'re married. Please re-enter your martial status');
};
