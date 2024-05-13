import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  playlistsFlatlistContainer: {
    height: "auto",
    width: "100%",
    marginBottom: 28,
  },
  playlistsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 16,
  },
  songListFlatlistContainer: {
    height: 280,
    width: "100%",
  },
  songListContainer: {
    width: "100%",
    gap: 12,
  },
});
