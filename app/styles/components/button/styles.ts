import { StyleSheet } from "react-native";
import { colors } from "../../colors";
import { ButtonFill, ButtonVariant } from "@tps/components/button";

export const makeStyles = (
  variant: ButtonVariant,
  fill: ButtonFill,
  customViewStyles?: Record<string, string | number>,
  customTextStyles?: Record<string, string | number>,
) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:
        fill === "contained"
          ? variant === "primary"
            ? colors.primary
            : colors.secondary
          : "none",
      paddingHorizontal: 24,
      paddingVertical: 18,
      borderRadius: 28,
      borderWidth: fill === "contained" ? 0 : 2,
      borderColor: variant === "primary" ? colors.primary : colors.secondary,
      marginVertical: 30,
      ...customViewStyles,
    },
    text: {
      color:
        fill === "contained"
          ? colors.white
          : variant === "primary"
            ? colors.primary
            : colors.secondary,
      fontSize: 18,
      letterSpacing: 4,
      ...customTextStyles,
    },
  });
