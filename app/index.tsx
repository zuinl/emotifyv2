import { ImageBackground, Text, View, Image, Linking } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages";
import { homeBGUrl, logoUrl } from "./constants/images";
import { Button } from "@components/button/button";
import { Link } from "expo-router";
//@ts-ignore
import TextEncodingPolyfill from "text-encoding";
import BigInt from "big-integer";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
  BigInt: BigInt,
});

const Home = () => {
  const [parameters, setParameters] = useState({ test: "oi" });

  useEffect(() => {
    const handleURL = (event: any) => {
      const { url } = event;
      const params = new URLSearchParams(url);
      //@ts-ignore
      setParameters(params);
    };

    const subscription = Linking.addEventListener("url", handleURL);

    return () => subscription.remove();
  }, []);

  return (
    <BaseLayoutProvider baseViewProps={{ style: { padding: 0 } }}>
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

            {Object.entries(parameters).map(([key, value]) => (
              <Text key={key} style={texts.text2}>{`${key}: ${value}`}</Text>
            ))}

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
