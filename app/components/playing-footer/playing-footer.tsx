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
      <Image source={{ uri: songImageUrl }} style={styles.songImage} />

      <View style={styles.songTitleContainer}>
        <Text style={[texts.text3, { fontWeight: "500" }]}>{songTitle}</Text>
        <Text style={texts.text4}>{songArtistName}</Text>
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
      <Pressable onPress={onPlayClick} style={styles.playContainer}>
        <Ionicons
          name={playing ? "pause" : "play"}
          color={colors.black}
          size={20}
        />
      </Pressable>
      <Pressable onPress={onArrowClick}>
        <Ionicons name="chevron-up" color={colors.lightGrey} size={18} />
      </Pressable>
    </View>
  );
};