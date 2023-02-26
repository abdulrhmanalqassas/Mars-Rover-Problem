const { rover } = require("./rover");
const { position } = require("./position");


var obstacles = [
  [ 2, 2],
  [1,2]
];

let index = -1;
// first we have current pos
// call getNextPos(nexIndex) return nextPos
// check if this pos is obstacles -> true return current
// else return nextPos

function stage(location, commands , obstacles=[]) {
  index++;
  var command = commands[index];
  var newlocation = rover(command, location);
  let newPosition = new position(newlocation.x,newlocation.y,newlocation.dir)
  let currentPosition = new position(location.x,location.y,location.dir)
  if (isObstacle(newlocation,obstacles)) {
    index = -1;
    // return current location and ignore newlocation
    return currentPosition.toString() + " STOPED"
  }
  if (index > commands.length) {
    index = -1;
    return newPosition.toString();

  }
  return stage(newlocation, commands);
}

function isObstacle(newLocation ,obstacles=[]) {
  var locationArr = [newLocation.x, newLocation.y];
  for (var index = 0; index < obstacles.length; index++) {
    var stop = obstacles[index];
    if (JSON.stringify(locationArr) == JSON.stringify(stop)) {
      return true;
    }
  }

  return false;
}

module.exports = {
  stage: stage,
  isObstacle: isObstacle,
};
