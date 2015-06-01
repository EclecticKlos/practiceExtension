function getUserName() {
  userName = prompt('Hello, what\'s your name?');

  if (!userName) {
    userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
  }
  return userName;
}

function getPhoneNumber(userName) {
  phoneNumber = prompt('Hello ' + userName +', what\'s your phone number?');

  return phoneNumber;
}


function getLocation(phoneNumber) {
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCode, areaCodes, locationName;
  if (phoneMatches) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  }
  return locationName ? locationName: 'somewhere';
}

getUserName();
getPhoneNumber(userName);
validatePhoneNumber(phoneNumber);
getLocation(phoneNumber);


// vv Before encapsulation

// var userName = prompt('Hello, what\'s your name?');
// // var phoneNumber = prompt('Hello '+ userName + ', what is your phone number?');
// var output = '<h1>Hello, ' + userName + '!</h1>';
// var areaCode = phoneMatches[1];
// var userLocation = kbValues.areaCodes[areaCode];

// if (phoneNumberPattern.test(phoneNumber)) {
//   output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + ' how is the weather in ' + userLocation + '?' + '</p>';
// } else {
//   output = output + '<h2>This phone number is invalid: ' +phoneNumber;
// }
// document.body.innerHTML = output;



// document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' accessed on: ' + kbValues.currentTime + '</p>' ;

