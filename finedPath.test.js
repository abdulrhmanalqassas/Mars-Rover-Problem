const {findPath} = require("./findPath")

describe("get path tests", () => {
    test("get the path normal", () => {
      let getPath = findPath({ x: 1, y: 1, dir: "W" }, { x: 7, y: 4 },[[7,14]]);
      let expected ='true path is: BBBBBBRFFF end at: {"x":7,"y":4,"dir":"N"}'
      expect(getPath).toStrictEqual(expected);
  
    });
    test("unreachable point", () => {
        let getPath = findPath({ x: 1, y: 1, dir: "N" }, { x: 7, y: 4 },[[7,4]]);
        let expected ='false max limit of mars no bath can be found '
        expect(getPath).toStrictEqual(expected);
      });

  });
  