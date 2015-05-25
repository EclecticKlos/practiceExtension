
var userName = prompt('Hello, what\'s your name?');
var phoneNumber = prompt('Hello '+ userName + ', what is your phone number?');
var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
var output = '<h1>Hello, ' + userName + '!</h1>';
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
var areaCode = phoneMatches[1];
var userLocation = kbValues.areaCodes[areaCode];

if (phoneNumberPattern.test(phoneNumber)) {
  output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + ' how is the weather in ' + userLocation + '?' + '</p>';
} else {
  output = output + '<h2>This phone number is invalid: ' +phoneNumber;
}
document.body.innerHTML = output;



// document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' accessed on: ' + kbValues.currentTime + '</p>' ;

