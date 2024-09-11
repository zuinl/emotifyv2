import { Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "@styles/components/playing-footer/styles";
import { texts } from "@styles/texts";
import { colors } from "@styles/colors";
import { PlayingFooterProps } from "@tps/components/playing-footer";
import { CustomPressable } from "../custom-pressable/custom-pressable";

export const PlayingFooter = ({
  songTitle,
  songArtistName,
  songDuration,
  currentPosition,
  songPlayingProgress,
  songImageUrl,
  playing,
  repeatState,
  shuffleState,
  expanded,
  onArrowClick,
  onPlayClick,
  onRepeatPress,
  onShufflePress,
  onDevicesPress,
  onPreviousPress,
  onSkipPress,
}: PlayingFooterProps) => {
  let repeatIcon = "repeat";
  if (repeatState === "track") repeatIcon = "repeat-once";
  if (repeatState === "off") repeatIcon = "repeat-off";
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={{ uri: songImageUrl }}
          style={styles.songImage}
          testID="song-image"
        />

        <View style={styles.songTitleContainer}>
          <Text
            style={[texts.text3, { fontWeight: "500" }]}
            testID="song-title"
          >
            {songTitle}
          </Text>
          <Text style={texts.text4} testID="artist-name">
            {songArtistName}
          </Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressLineContainer,
                { width: `${songPlayingProgress}%` },
              ]}
            >
              <CustomPressable customStyles={styles.progressCircle} />
            </View>
          </View>
        </View>
        <CustomPressable
          onPress={onPlayClick}
          customStyles={styles.playContainer}
          testID="play-pause-button"
        >
          <Ionicons
            name={playing ? "pause" : "play"}
            color={colors.black}
            size={22}
            testID="play-pause-icon"
          />
        </CustomPressable>
        <CustomPressable onPress={onArrowClick} testID="expand-button">
          <Ionicons
            name={expanded ? "chevron-down" : "chevron-up"}
            color={colors.lightGrey}
            size={18}
          />
        </CustomPressable>
      </View>
      {expanded && (
        <View style={styles.expandedContainer}>
          <View style={styles.expandedSongImageContainer}>
            <Image
              source={{ uri: songImageUrl }}
              style={styles.expandedSongImage}
              testID="expanded-song-image"
            />
          </View>
          <View style={styles.expandedIconsContainer}>
            <CustomPressable onPress={onPreviousPress} testID="previous-button">
              <Ionicons
                name="play-skip-back"
                color={colors.lightGrey}
                size={32}
              />
            </CustomPressable>
            <CustomPressable onPress={onShufflePress} testID="shuffle-button">
              <Ionicons
                name="shuffle"
                color={shuffleState ? colors.primary : colors.lightGrey}
                size={28}
              />
            </CustomPressable>
            <CustomPressable onPress={onRepeatPress} testID="repeat-button">
              <MaterialCommunityIcons
                // @ts-expect-error ícone condicional
                name={repeatIcon}
                color={
                  repeatState === "off" ? colors.lightGrey : colors.primary
                }
                size={28}
              />
            </CustomPressable>
            <CustomPressable onPress={onDevicesPress} testID="devices-button">
              <MaterialIcons
                name="devices-other"
                color={colors.secondary}
                size={28}
              />
            </CustomPressable>
            <CustomPressable onPress={onSkipPress} testID="next-button">
              <Ionicons
                name="play-skip-forward"
                color={colors.lightGrey}
                size={32}
              />
            </CustomPressable>
          </View>
        </View>
      )}
    </View>
  );
};
