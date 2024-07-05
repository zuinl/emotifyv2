import { Image, Pressable, Text } from "react-native";
import { styles } from "@styles/components/playlist-card/styles";
import { texts } from "@styles/texts";
import { PlaylistCardProps } from "../../types/components/playlist-card";

export const PlaylistCard = ({
  title,
  totalTracks,
  imageUrl,
  onPress,
}: PlaylistCardProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        styles.container,
      ]}
      onPress={onPress}
      testID="playlist-card-button"
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        testID="playlist-image"
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[texts.text2, styles.title]}
        testID="playlist-title"
      >
        {title}
      </Text>
      <Text style={texts.text4} testID="playlist-length">
        {totalTracks} faixas
      </Text>
    </Pressable>
  );
};
