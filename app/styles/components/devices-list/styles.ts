import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.blackOpacity,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    height: "40%",
    backgroundColor: colors.pageBackground,
    opacity: 1,
    //TODO: padronizar border radius
    borderRadius: 8,
    //TODO: padronizar padding
    paddingVertical: 22,
    paddingHorizontal: 12,
  },
  devicesContainer: {
    width: "100%",
    paddingTop: 24,
    gap: 22,
  },
  closeContainer: {
    marginTop: 16,
    marginLeft: "auto",
  },
});
