import { styles } from "@styles/components/song-chip/song-chip";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { colors } from "@styles/colors";
import { texts } from "../../styles/texts";
import { SongChipProps } from "../../types/components/song-chip";
import { useContext } from "react";
import { BaseLayoutContext } from "../../contexts/base-layout.context";

export const SongChip = ({
  id,
  title,
  artist,
  duration,
  liked,
  onToggleLike,
}: SongChipProps) => {
  const { isPlaying, isTrackPlaying, onSongPress } =
    useContext(BaseLayoutContext);
  const playing = isTrackPlaying(id);

  let iconName = "";
  if (playing && isPlaying) {
    iconName = "pause";
  } else if (playing && !isPlaying) {
    iconName = "play";
  } else {
    iconName = "play";
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onSongPress(id)}
        style={styles.playContainer}
        testID="song-chip-button"
      >
        <Ionicons
          //@ts-ignore
          name={iconName}
          size={20}
          color={playing ? colors.primary : colors.lightGrey}
        />
      </Pressable>
      <View style={styles.songTitleContainer}>
        <Text style={texts.text2} testID="song-title">
          {title}
        </Text>
        <Text style={texts.text4} testID="artist-name">
          {artist}
        </Text>
      </View>
      <Text style={texts.text2} testID="song-duration">
        {duration}
      </Text>
      <Pressable
        onPress={() => onToggleLike(id)}
        testID="song-chip-like-button"
      >
        <Ionicons
          name="heart"
          size={22}
          color={liked ? colors.primary : colors.darkGrey}
          style={styles.likeIcon}
        />
      </Pressable>
    </View>
  );
};
