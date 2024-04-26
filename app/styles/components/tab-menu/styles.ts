import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    height: "auto",
    marginBottom: 18,
  },
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 22,
  },
  tabContainer: {
    alignItems: "center",
    gap: 2,
  },
  tabText: {
    color: colors.darkGrey,
  },
  tabTextActive: {
    color: colors.white,
  },
  activeIndicator: {
    width: "80%",
    height: 4,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
});
