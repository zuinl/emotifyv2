import AsyncStorage from "@react-native-async-storage/async-storage";
import { accessTokenIdentifier, expiresTokenIdentifier } from "./constants";
import { refreshAuthToken } from "@services/refresh-access-token";

/**
 * Consulta o Token de acesso armazenado localmente
 * @returns O Token de acesso
 */
export const getAccessToken = async (): Promise<string> => {
  let accessToken: string =
    (await AsyncStorage.getItem(accessTokenIdentifier)) ?? "";
  if (accessToken) {
    const expiresIn: number = Number(
      await AsyncStorage.getItem(expiresTokenIdentifier),
    );

    if (new Date().getTime() >= expiresIn) {
      await refreshAuthToken();
      /* istanbul ignore next */
      accessToken = await AsyncStorage.getItem(accessTokenIdentifier) ?? "";
    }
  }

  return accessToken;
};
