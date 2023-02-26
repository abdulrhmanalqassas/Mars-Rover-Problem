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
  test("basic move with negative value test", () => {
    expect( move("B", "N"))
    .toStrictEqual({ xIncrease: -0, yIncrease: -1 });
  });
});
