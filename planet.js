const { rover } = require("./rover");
const { position } = require("./position");


let index = -1;
/**
 * follow path with or without obstacles  .
 * @param {position} location
 * @param {string} commands
 * @param {Array} obstaclesArr
 * */


// check if this pos is obstacles -> true return current
// else return nextPos

function stage(location, commands , obstaclesArr=[]) {
  checkInputFormat(location.x,location.y,location.dir)
  index++;
  var command = commands[index];
  var newlocation = rover(command, location);
  let newPosition = new position(newlocation.x,newlocation.y,newlocation.dir)
  let currentPosition = new position(location.x,location.y,location.dir)
  if (isObstacle(newlocation,obstaclesArr)) {
    index = -1;
    // return current location and ignore newlocation
    return currentPosition.toString() + " STOPPED"
  }
  if (index+1 >= commands.length) {
    index = -1;
    return newPosition.toString();
    
  }else  return stage(newlocation, commands,obstaclesArr);
 
}

function isObstacle(newLocation ,obstacles) {
  var locationArr = [newLocation.x, newLocation.y];
  for (var index = 0; index < obstacles.length; index++) {
    var stop = obstacles[index];
    if (JSON.stringify(locationArr) == JSON.stringify(stop)) {
      return true;
    }
  }

  return false;
}

function checkInputFormat(x,y,dir){
  const dirArray = ["N","W","E","S"]
  x = typeof x  === "number" ;
  y = typeof y === "number";
  const inDir = (typeof dir === "string") && dirArray.includes(dir); 
  if ((x & y & inDir) == false ) throw new Error("wrong input")
}

module.exports = {
  stage: stage,
  isObstacle: isObstacle,
};
