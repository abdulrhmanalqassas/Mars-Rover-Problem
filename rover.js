
const directions = ["N", "E", "S", "W"];

// start = {x:1,y:2,dir:"W"}

function rover(command, location) {
  var tempLocation = {...location}
  var newX = tempLocation.x;
  var newY = tempLocation.y;
  var newDir = tempLocation.dir;
  if (command === "F" || command === "B") {
    let step = move(command, tempLocation.dir)
    newX = tempLocation.x + step.xIncrease;
    newY = tempLocation.y + step.yIncrease;
  } else if (command === "L" || command === "R") {
    newDir = turn(command, tempLocation.dir);
  }
  return { x: newX, y: newY, dir: newDir };
}

function move(command, direction) {
  var xIncrease = 0,
    yIncrease = 0;
    const movesOnY = {
      "N":1,
      "S":-1,
    }
    const movesOnX = {
      "E":1,
      "W":-1,
    }
    yIncrease = movesOnY[direction] || 0;
    xIncrease = movesOnX[direction] || 0;
  if (command === "B") {
    xIncrease *= -1;
    yIncrease *= -1;
  }
  return { xIncrease: xIncrease, yIncrease: yIncrease };
}

function turn(command, direction) {
  var index = directions.indexOf(direction);
  index = command === "L" ? (index + 3) % 4 : (index + 1) % 4;
  return directions[index];
}

module.exports = {
  rover: rover,
  turn,
  move,
};
