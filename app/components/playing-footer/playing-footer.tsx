import { Image, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "@styles/components/playing-footer/styles";
import { texts } from "@styles/texts";
import { colors } from "@styles/colors";
import { PlayingFooterProps } from "../../types/components/playing-footer";

export const PlayingFooter = ({
  songTitle,
  songArtistName,
  songDuration,
  currentPosition,
  songPlayingProgress,
  songImageUrl,
  playing,
  onArrowClick,
  onPlayClick,
}: PlayingFooterProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: songImageUrl }} style={styles.songImage} testID="song-image" />

      <View style={styles.songTitleContainer}>
        <Text style={[texts.text3, { fontWeight: "500" }]} testID="song-title">{songTitle}</Text>
        <Text style={texts.text4} testID="artist-name">{songArtistName}</Text>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressLineContainer,
              { width: `${songPlayingProgress}%` },
            ]}
          >
            <Pressable style={styles.progressCircle} />
          </View>
        </View>
      </View>
      <Pressable onPress={onPlayClick} style={styles.playContainer} testID="play-pause-button">
        <Ionicons
          name={playing ? "pause" : "play"}
          color={colors.black}
          size={20}
          testID="play-pause-icon"
        />
      </Pressable>
      <Pressable onPress={onArrowClick} testID="expand-button">
        <Ionicons name="chevron-up" color={colors.lightGrey} size={18} />
      </Pressable>
    </View>
  );
};
