import * as Linking from "expo-linking";
import { requestAuth } from "../request-auth";

describe("service: requestAuth", () => {
  it("should successfully open auth URL", async () => {
    const linkingMock = jest.spyOn(Linking, "openURL");

    await requestAuth();

    expect(linkingMock).toHaveBeenCalledTimes(1);
  });
});
