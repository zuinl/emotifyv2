import AsyncStorage from "@react-native-async-storage/async-storage";
import { requestAuthToken } from "../request-access-token";
import { codeVerifierIdentifier } from "../../utils/constants";

describe("service: requestAuthToken", () => {
  it("should return successfully response", async () => {
    await AsyncStorage.setItem(codeVerifierIdentifier, "some_code");

    await requestAuthToken("some_code");

    expect(requestAuthToken("some_code")).resolves.not.toThrow();
  });
  
  it("should interrupt due to lack of code", async () => {
    await AsyncStorage.setItem(codeVerifierIdentifier, "some_code");

    //@ts-expect-error o teste necessita do tipo errado
    await requestAuthToken(undefined);

    //@ts-expect-error o teste necessita do tipo errado
    expect(requestAuthToken(undefined)).resolves.not.toThrow();
  });
  
  it("should interrupt due to lack of code verifier", async () => {
    await AsyncStorage.removeItem(codeVerifierIdentifier);

    await requestAuthToken("some_code");

    expect(requestAuthToken("some_code")).resolves.not.toThrow();
  });
});
