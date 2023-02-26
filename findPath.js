const { isObstacle } = require("./planet");
const { rover } = require("./rover");
const {Queue} =  require("./lib");

function findPath(source, destination , obstacles=[]) {
  let q = new Queue();
  let explored = new Set();
  let memo = new Map();
  memo.set(JSON.stringify(source), " ");
  q.enqueue(source);
  explored.add(JSON.stringify(source));
  while (q.items) {
    let t = q.dequeue();
    explored.add(JSON.stringify(t));

    if (t.x == destination.x && t.y == destination.y) {
      return true  +" path is:"+ memo.get(JSON.stringify(t)) + " end at: " + JSON.stringify(t);
    }
    
    if (( t.x >= 180 || t.x <= -180 ) & ( t.y >= 90 || t.y <= -90 )) {
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
