const { isObstacle } = require("./planet");
const { rover } = require("./rover");

class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + " inserted";
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}

function findBath(source, destination) {
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
      return true  + memo.get(JSON.stringify(t)) + JSON.stringify(t);
    }
    
    if (( t.x >= 180 || t.x <= -180 ) & ( t.y >= 90 || t.y <= -90 )) {
      console.log(t.x, t.y);
      return false + " max limit of mars ";
    }

    let edges = generateEdges(t, memo.get(JSON.stringify(t)));
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

function generateEdges(source, path) {
  return [
    { node: rover("R", source), path: path.concat("R") },
    { node: rover("L", source), path: path.concat("L") },
    { node: rover("F", source), path: path.concat("F") },
    { node: rover("B", source), path: path.concat("B") },
  ].filter((elem) => {
    return !isObstacle(elem.node);
  });
}

console.log(findBath({ x: 1, y: 1, dir: "W" }, { x: 7, y: 4 }));
