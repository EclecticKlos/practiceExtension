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
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  if (phoneNumber) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  } else {
    console.log("Phone number issue");
  }
  return locationName ? locationName : 'somewhere';
}

function replaceFBDisplay() {
  var output = '<h1>Hello, ' + userName + '!</h1>';
  var newOutput = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + ' how is the weather in ' + locationName + '?' + '</p>';
  document.body.innerHTML = newOutput;
}

getUserName();
getPhoneNumber(userName);
getLocation(phoneNumber);
replaceFBDisplay();

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

