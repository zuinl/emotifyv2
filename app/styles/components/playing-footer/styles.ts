import { Platform, StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "auto",
    backgroundColor: colors.pageBackground,
    position: "absolute",
    bottom: Platform.OS === "android" ? 24 : 0,
    borderTopColor: colors.primary,
    borderTopWidth: 2,
    padding: 6,
  },
  container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  songTitleContainer: {
    width: 260,
  },
  progressBarContainer: {
    width: "100%",
    height: 6,
    backgroundColor: colors.lightGrey,
    borderRadius: 8,
    marginTop: 6,
  },
  progressLineContainer: {
    width: "40%",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  progressCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  playContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  expandedContainer: {
    width: "100%",
    height: 280,
    padding: 10,
    paddingTop: 18,
    justifyContent: "space-between",
  },
  expandedIconsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  expandedSongImageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  expandedSongImage: {
    width: 180,
    height: 180,
    borderRadius: 25,
  },
});
