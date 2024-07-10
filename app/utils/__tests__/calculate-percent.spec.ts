import { calculatePercent } from "../calculate-percent";

describe("util: calculatePercent", () => {
  it("should return correct result", () => {
    const result = calculatePercent(560, 56);

    expect(result).toBe(10);
  });
});
