import { Image, View } from "react-native";
import { styles } from "../../styles/components/header/styles";
import { logoUrl } from "../../constants/images";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: logoUrl }} />
        </View>
    );
};
