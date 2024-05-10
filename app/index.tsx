import { ImageBackground, Text, View, Image, Linking } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages";
import { homeBGUrl, logoUrl } from "./constants/images";
import { Button } from "@components/button/button";
import { Link, router } from "expo-router";
//@ts-ignore
import TextEncodingPolyfill from "text-encoding";
import BigInt from "big-integer";
import { useEffect } from "react";
import { requestAuthToken } from "./services/request-access-token";
import { getAccessToken } from "./utils/get-access-token";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
  BigInt: BigInt,
});

const Home = () => {
  useEffect(() => {
    const checkAccessToken = async () => {
      if (await getAccessToken()) {
        router.replace("/pages/home");
      }
    };

    checkAccessToken();

    Linking.addEventListener("url", async function (e) {
      const url = new URL(e.url);
      const codeParam = url.searchParams.get("code");

      if (codeParam) {
        await requestAuthToken(codeParam);
        router.replace("/pages/home");
      }
    });
  }, []);

  return (
    <BaseLayoutProvider
      baseViewProps={{ style: { padding: 0 } }}
      noPlayingFooter
    >
      <ImageBackground
        source={{
          uri: homeBGUrl,
        }}
        style={styles.imageBg}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={{ uri: logoUrl }} style={styles.logo} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={[texts.title1, { textAlign: "center" }]}>
              Comece sua história musical
            </Text>
            <Text style={[texts.text1, { textAlign: "center" }]}>
              Música é arte. Arte é emoção. O Emotify une tudo isso. Ouça suas
              músicas e registre sua história com elas.
            </Text>

            <Link href="/pages/connect" asChild>
              <Button
                text="Dê o play"
                onPress={() => {}}
                variant="primary"
                fill="ghost"
                customStyle={{ marginTop: 80 }}
              />
            </Link>
          </View>
        </View>
      </ImageBackground>
    </BaseLayoutProvider>
  );
};

export default Home;
