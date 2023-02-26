const { stage } = require("./planet");
const { position } = require("./position");
let newPosition = new position(-1, 4, "NORTH");
console.log(
  stage(newPosition.in(), "RFFFF", [
    [1, 4],
    [3, 5],
    [7, 4],
  ])
);
