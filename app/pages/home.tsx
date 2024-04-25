import { Text, View } from "react-native";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages/home";
import { Header } from "../components/header/header";

const Home = () => {
    return (
        <BaseLayoutProvider baseViewProps={{ style: { padding: 0 } }}>
            <View style={styles.container}>
                <Header />
                <Text style={[texts.text2]}>
                    Home page
                </Text>
            </View>
        </BaseLayoutProvider>
    );
};

export default Home;
