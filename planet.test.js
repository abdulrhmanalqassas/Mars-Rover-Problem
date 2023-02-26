const { stage } = require("./planet");

describe("planet tests", () => {
  test("stage with normal act ", () => {
    let testStage = stage({ x: 1, y: 1, dir: "N" }, "FFFFFFF");
    let expected ="(1, 8) NORTH"
    expect(testStage).toStrictEqual(expected);

  });
  test("stage with NEGATIVE VALUES and obstacles", () => {
    let testStage = stage({ x: 1, y: -2, dir: "N" },"FFFFFFF",[[1,2],[2,3]]);
    let expected = "(1, 1) NORTH STOPPED"
    expect(testStage).toStrictEqual(expected);
  }); 
  test("stage with Error", () => {
    expect(() => stage({ x: 1, y: -2, dir: "N" },"X",[[1,2],[2,3]])).toThrow("you are using bad command");
    expect(() =>stage({ x: 1, y: -2, dir: "N" },"X",[[1,2],[2,3]])).toThrow(Error);
  }); 
  test("stage with Error in input", () => {
    expect(() => stage({ x: 1, y: "l", dir: "L" },"F",[[1,2],[2,3]])).toThrow("wrong input");
    expect(() =>stage({ x: 1, y: "l", dir: "L" },"F",[[1,2],[2,3]])).toThrow(Error);
  }); 
});
