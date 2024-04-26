import { Image, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "../../styles/components/header/styles";
import { logoUrl } from "../../constants/images";
import { colors } from "../../styles/colors";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}}>
        <Ionicons name="search" size={26} color={colors.secondary} />
      </Pressable>
      <Image style={styles.logo} source={{ uri: logoUrl }} />
      <Pressable onPress={() => {}}>
        <Feather name="more-vertical" size={26} color={colors.lightGrey} />
      </Pressable>
    </View>
  );
};
