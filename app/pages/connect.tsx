import { ImageBackground, Text, View, Image } from "react-native";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages/connect";
import { logoUrl, welcomeBgUrl } from "../constants/images";
import { Button } from "@components/button/button";
import { Link } from "expo-router";

const Home = () => {
    return (
        <BaseLayoutProvider baseViewProps={{ style: { padding: 0 } }}>
            <ImageBackground
                source={{
                    uri: welcomeBgUrl,
                }}
                style={styles.imageBg}
            >
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={{ uri: logoUrl }} style={styles.logo} />
                    </View>
                    <View style={styles.contentContainer}>
                        <Link href="/pages/home" asChild>
                            <Button
                                text="Conectar agora"
                                onPress={() => { }}
                                variant="secondary"
                                fill="ghost"
                                customStyle={{ marginTop: 80 }}
                            />
                        </Link>
                        <Text style={[texts.text2, { textAlign: "center" }]}>
                            O Emotify precisa se conectar à sua conta do Spotify para iniciarmos sua jornada
                        </Text>
                        <Text style={[texts.text4, { textAlign: "center" }]}>
                            Você precisa de uma conta Spotify Premium
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </BaseLayoutProvider>
    );
};

export default Home;
