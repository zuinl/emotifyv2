import { Image, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "@styles/components/header/styles";
import { logoUrl } from "@constants/images";
import { colors } from "@styles/colors";
import { HeaderProps } from "@tps/components/header";
import { CustomPressable } from "../custom-pressable/custom-pressable";

export const Header = ({ onOptionsPress, onSearchPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <CustomPressable onPress={onSearchPress} testID="search-button">
        <Ionicons name="search" size={26} color={colors.secondary} />
      </CustomPressable>
      <Image style={styles.logo} source={{ uri: logoUrl }} />
      <CustomPressable onPress={onOptionsPress} testID="options-button">
        <Feather name="more-vertical" size={26} color={colors.lightGrey} />
      </CustomPressable>
    </View>
  );
};
