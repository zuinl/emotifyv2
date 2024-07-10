import { transformDuration } from "../transform-duration";

describe("util: transformDuration", () => {
  it("should return correct transformed result", async () => {
    const result = transformDuration(65000);

    expect(result).toBe("1:05");
  });
  
  it("should return correct transformed result", async () => {
    const result = transformDuration(72000);

    expect(result).toBe("1:12");
  });
});
