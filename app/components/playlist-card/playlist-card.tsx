import { Image, Text } from "react-native";
import { styles } from "@styles/components/playlist-card/styles";
import { texts } from "@styles/texts";
import { PlaylistCardProps } from "../../types/components/playlist-card";
import { CustomPressable } from "../custom-pressable/custom-pressable";

export const PlaylistCard = ({
  title,
  totalTracks,
  imageUrl,
  onPress,
}: PlaylistCardProps) => {
  return (
    <CustomPressable
      onPress={onPress}
      testID="playlist-card-button"
      customStyles={styles.container}
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
    </CustomPressable>
  );
};
