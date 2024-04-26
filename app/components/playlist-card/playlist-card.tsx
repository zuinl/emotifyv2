import { Image, Pressable, Text } from "react-native";
import { styles } from "@styles/components/playlist-card/styles";
import { texts } from "@styles/texts";
import { PlaylistCardProps } from "../../types/components/playlist-card";

export const PlaylistCard = ({
  title,
  duration,
  imageUrl,
  onPress,
}: PlaylistCardProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={[texts.text2, styles.songTitle]}>{title}</Text>
      <Text style={texts.text4}>{duration}</Text>
    </Pressable>
  );
};
