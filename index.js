const { stage } = require("./planet");
const { position } = require("./position");
const { findPath } = require("./findPath");
let newPosition = new position(-1, 4, "NORTH");
console.log(("|+|".repeat(20)),"\n",
  stage(newPosition.in(), "RFFFF", [
    [1, 4],
    [3, 5],
    [7, 4],
  ])
);
console.log(("|-|".repeat(20)),"\n",
  findPath({ x: 1, y: 1, dir: "W" }, { x: 7, y: 4 }, [
    [7, 14],
    [1, 20],
    [3, 5],
  ])
);
