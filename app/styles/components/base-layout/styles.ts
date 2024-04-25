import { Dimensions, StyleSheet } from "react-native";
import { colors } from "@styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: colors.pageBackground,
    padding: 12,
  },
});
