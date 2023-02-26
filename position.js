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
function position(x=0, y=0, direction="NORTH") {
  this.out = function () {
    return `(${x}, ${y}) ${direction}`;
  };
  this.in = function () {
    return { x: x, y: y, dir: directionsMap[direction] };
  };
}

module.exports = {
    position: position
  }
  

