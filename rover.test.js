const { rover , move , turn } = require("./rover");

describe("rover tests", () => {
  test("basic rover test", () => {
    expect(rover("F", { x: -5, y: 4, dir: "N" }))
    .toStrictEqual({
      x: -5,
      y: 5,
      dir: "N",
    });
  });
  test("rover test for large num", () => {
    expect(rover("F", { x: -500000000, y: 4000000000, dir: "N" }))
    .toStrictEqual({
      x: -500000000,
      y: 4000000001,
      dir: "N",
    });
  });
  test("basic move with negative value test", () => {
    expect( move("B", "N"))
    .toStrictEqual({ xIncrease: -0, yIncrease: -1 });
  });
  test("rover with Error bad command", () => {
    expect(() => rover("b", { x: -500000000, y: 4000000000, dir: "N" })).toThrow("you are using bad command");
    expect(() =>rover("b", { x: -500000000, y: 4000000000, dir: "N" })).toThrow(Error);
  }); 
});
