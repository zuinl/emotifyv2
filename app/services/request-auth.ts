import AsyncStorage from "@react-native-async-storage/async-storage";
//@ts-ignore
import { encode } from "base-64";
import * as Crypto from "expo-crypto";
import * as Linking from "expo-linking";

export const requestAuth = async () => {
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const clientId = "2eead9133c1f412f8c482c17992adfbe";
  const redirectUri = "exp://192.168.18.25:8081";

  const scope =
    "user-read-playback-state user-modify-playback-state user-read-currently-playing streaming playlist-read-private user-top-read user-read-recently-played user-library-read user-library-modify";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  await AsyncStorage.setItem("code_verifier", codeVerifier);

  const params = {
    response_type: "code",
    client_id: clientId,
    scope,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  Linking.openURL(authUrl.toString());
};

const generateRandomString = (length: number) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = Crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const codeVerifier = generateRandomString(64);

const sha256 = async (plain: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return Crypto.digest(Crypto.CryptoDigestAlgorithm.SHA256, data);
};

const base64encode = (input: ArrayBuffer) => {
  return encode(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};
