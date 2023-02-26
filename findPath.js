const { isObstacle } = require("./planet");
const { rover } = require("./rover");
const {Queue} =  require("./lib");

function findPath(source, destination , obstacles=[]) {
  boundaries = {
   maxX: Math.abs(destination.x)+180,
   maxY :  Math.abs(destination.y)+90
  }
  let q = new Queue();
  let explored = new Set();
  let memo = new Map();
  let stringSource = JSON.stringify(source)
  memo.set(stringSource, " ");
  q.enqueue(source);
  explored.add(stringSource);
  while (q.items) {
    let t = q.dequeue();
    explored.add(JSON.stringify(t));

    if (t.x == destination.x && t.y == destination.y) {
      return memo.get(JSON.stringify(t)).trim();
    }
    
    if (( t.x >= boundaries.maxX || t.x <= -boundaries.maxX) & ( t.y >= boundaries.maxY || t.y <= -boundaries.maxY )) {
      console.log(t.x, t.y);
      return false + " max limit of mars no bath can be found ";
    }

    let edges = generateEdges(t, memo.get(JSON.stringify(t)),obstacles);
    edges
      .filter((edge) => {
        return !explored.has(JSON.stringify(edge.node));
      })
      .forEach((n) => {
        var node= JSON.stringify(n.node);
        explored.add(node);
        memo.set(node, n.path);
        q.enqueue(n.node);
      });
  }
  return false;
}

function generateEdges(source, path ,obstacles) {
  return [
    { node: rover("R", source), path: path.concat("R") },
    { node: rover("L", source), path: path.concat("L") },
    { node: rover("F", source), path: path.concat("F") },
    { node: rover("B", source), path: path.concat("B") },
  ].filter((elem) => {
    return !isObstacle(elem.node,obstacles);
  });
}


module.exports = {
  findPath: findPath,
};
