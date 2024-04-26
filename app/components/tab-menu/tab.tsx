import { Pressable, Text, View } from "react-native";
import { styles } from "@styles/components/tab-menu/styles";
import { texts } from "@styles/texts";
import { TabProps } from "@tps/components/tab-menu";

export const Tab = ({ onPress, text, active }: TabProps) => {
  return (
    <Pressable onPress={onPress} style={styles.tabContainer}>
      <Text
        style={[
          texts.text1,
          styles.tabText,
          active ? styles.tabTextActive : null,
        ]}
      >
        {text}
      </Text>
      {active && <View style={styles.activeIndicator}></View>}
    </Pressable>
  );
};
