const { stage } = require("./planet");

describe("planet tests", () => {
  test("stage with NEGATIVE VALUES and obstacles", () => {
    let testStage = stage({ x: 1, y: -2, dir: "N" }, "FFFFFFF");
    let expected ="(1, 5) NORTH"
    expect(testStage).toStrictEqual(expected);

  });
  test("stage with NEGATIVE VALUES and obstacles", () => {
    let testStage = stage({ x: 1, y: -2, dir: "N" },"FFFFFFF",[[1,2],[2,3]]);
    let expected = "(1, 1) NORTH STOPPED"
    expect(testStage).toStrictEqual(expected);
  });
  
 
});
