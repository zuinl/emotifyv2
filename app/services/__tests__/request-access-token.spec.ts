import { requestAuthToken } from "../request-access-token";

describe("service: requestAuthToken", () => {
  it("should return successfully response", () => {
    expect(requestAuthToken("123")).resolves.not.toThrow();
  });
});
