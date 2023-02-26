/**
 * Create a position.
 * @param {number} x
 * @param {number} y
 * @param {string} direction
 * */
const directionsMap = {
  NORTH: "N",
  EAST: "E",
  SOUTH: "S",
  WEST: "W",
};
const ReversedDirectionsMap = {
  N: "NORTH",
  E: "EAST",
  S: "SOUTH",
  W: "WEST",
}
function position(x=0, y=0, direction="NORTH") {
  this.toString = function () {
    return `(${x}, ${y}) ${ReversedDirectionsMap[direction]}`;
  };
  this.in = function () {
    return { x: x, y: y, dir: directionsMap[direction] };
  };
}

module.exports = {
    position: position
  }
  

