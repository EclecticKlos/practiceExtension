var makeCurrentTime = function() {
  currentDate = new Date();
  var timeNow = currentDate.getFullYear() + '-' +
  (currentDate.getMonth() + 1) + '-' +
  currentDate.getDate() + ' at ' +
  currentDate.getHours() + ':' +
  currentDate.getMinutes() + ':' +
  currentDate.getSeconds();
  return timeNow;
};

function getAreaCodes() {
   areaCodes = {
    '408': 'Silicon Valley',
    '702': 'Las Vegas',
    '801': 'Northern Utah',
    '765': 'West Lafeyette',
    '901': 'Memphis',
    '507': 'Rochester, MN',
    '734': 'Ann Arbor, MI',
  };
  return areaCodes;
}

var kbValues = {
  projectName: 'kittenbook',
  versionNumber: '0.0.1',
  currentTime: makeCurrentTime(),
};
