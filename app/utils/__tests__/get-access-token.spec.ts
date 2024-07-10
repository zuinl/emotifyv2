import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken } from "../get-access-token";
import { accessTokenIdentifier, expiresTokenIdentifier } from "../constants";

describe("util: getAccessToken", () => {
  it("should return correct result", async () => {
    await AsyncStorage.setItem(accessTokenIdentifier, "some_token");
    await AsyncStorage.setItem(expiresTokenIdentifier, "30");

    const result = await getAccessToken();

    expect(typeof result).toBe("string");
  });
});
