import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken } from "../utils/get-access-token";
import { accessTokenIdentifier, authBaseAPI, clientID, expiresTokenIdentifier, redirectUrl, refreshTokenIdentifier } from "../utils/constants";

/**
 * Método reúne os dados para fazer a requisição do Token de acesso
 * @param code O código recebido via parâmetro após aprovação do usuário no navegador
 */
export const requestAuthToken = async (code: string):Promise<void> => {
  if (!code) return;
  if (await getAccessToken()) return;

  let code_verifier: string = "";
  try {
    code_verifier = (await AsyncStorage.getItem("code_verifier")) ?? "";
  } catch (e) {
    console.error(e);
  }

  if (!code_verifier) return;

  const res = await fetch(authBaseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUrl,
      client_id: clientID,
      code_verifier,
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
