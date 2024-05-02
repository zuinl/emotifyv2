import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  accessTokenIdentifier,
  authBaseAPI,
  clientID,
  expiresTokenIdentifier,
  refreshTokenIdentifier,
} from "../utils/constants";

/**
 * Método reúne os dados para fazer a renovação do Token de acesso
 */
export const refreshAuthToken = async (): Promise<void> => {
  const refresh_token = await AsyncStorage.getItem(refreshTokenIdentifier);

  if (!refresh_token) return;

  const res = await fetch(authBaseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
      client_id: clientID,
    }).toString(),
  });

  const body = await res.json();

  if (body.access_token) {
    await AsyncStorage.setItem(accessTokenIdentifier, body.access_token);
    await AsyncStorage.setItem(refreshTokenIdentifier, body.refresh_token);
    await AsyncStorage.setItem(
      expiresTokenIdentifier,
      String(new Date().getTime() + body.expires_in * 1000),
    );
  }
};
