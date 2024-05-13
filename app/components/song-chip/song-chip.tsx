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
  toggleLike,
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
      <Pressable onPress={() => onSongPress(id)} style={styles.playContainer}>
        <Ionicons
          //@ts-ignore
          name={iconName}
          size={20}
          color={playing ? colors.primary : colors.lightGrey}
        />
      </Pressable>
      <View style={styles.songTitleContainer}>
        <Text style={texts.text2}>{title}</Text>
        <Text style={texts.text4}>{artist}</Text>
      </View>
      <Text style={texts.text2}>{duration}</Text>
      <Pressable onPress={() => toggleLike(id)}>
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
