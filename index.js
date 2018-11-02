// Code your solution in this file.

function lowerCaseDrivers(oldNames){
  const lowNames = oldNames.map(function(name){
    return name.toLowerCase();
  });
}


function nameToAttributes(oldNames) {
  const propNames = oldNames.map(function(name){
    const nameSplit = name.split(' ');
    return Object.assign({}, {firstName: nameSplit[0], lastName: nameSplit[1]});
  });
}


function attributesToPhrase(){

}
