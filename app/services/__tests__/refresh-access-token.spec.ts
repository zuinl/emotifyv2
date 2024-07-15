import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshAuthToken } from "../refresh-access-token";
import { refreshTokenIdentifier } from "../../utils/constants";

describe("service: refreshAuthToken", () => {
  it("should return successfully response", async () => {
    await AsyncStorage.setItem(refreshTokenIdentifier, "some_token");

    await refreshAuthToken();

    expect(refreshAuthToken()).resolves.not.toThrow();
  });
});
