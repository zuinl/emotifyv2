import { styles } from "@styles/components/song-chip/song-chip";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { colors } from "@styles/colors";
import { texts } from "../../styles/texts";
import { SongChipProps } from "../../types/components/song-chip";

export const SongChip = ({
  id,
  title,
  artist,
  duration,
  playing,
  liked,
  onPress,
  toggleLike,
}: SongChipProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onPress(id)} style={styles.playContainer}>
        <Ionicons
          name={playing ? "pause" : "play"}
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
