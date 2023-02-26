const {findPath} = require("./findPath")

describe("get path tests", () => {
    test("get the path", () => {
      let getPath = findPath({ x: 1, y: 1, dir: "W" }, { x: 7, y: 4 });
      let expected ='true path is: BBBBBBRFFF end at: {"x":7,"y":4,"dir":"N"}'
      expect(getPath).toStrictEqual(expected);
  
    });

  });
  