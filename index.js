const { stage } = require("./planet");
const { position } = require("./position");
let newPosition = new position(1, 1, "NORTH");
console.log(stage(newPosition.in(), "FFRFFF"));
