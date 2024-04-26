import { ImageBackground, Text, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages";
import { homeBGUrl, logoUrl } from "./constants/images";
import { Button } from "@components/button/button";
import { Link } from "expo-router";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

const Home = () => {
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
