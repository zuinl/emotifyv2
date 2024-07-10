import { refreshAuthToken } from "../refresh-access-token";

describe("service: refreshAuthToken", () => {
  it("should return successfully response", () => {
    expect(refreshAuthToken()).resolves.not.toThrow();
  });
});
