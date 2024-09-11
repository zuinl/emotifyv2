import { Text, View } from "react-native";
import { styles } from "@styles/components/tab-menu/styles";
import { texts } from "@styles/texts";
import { TabProps } from "@tps/components/tab-menu";
import { CustomPressable } from "../custom-pressable/custom-pressable";

export const Tab = ({ onPress, text, active }: TabProps) => {
  return (
    <CustomPressable onPress={onPress} customStyles={styles.tabContainer}>
      <Text
        style={[
          texts.text1,
          styles.tabText,
          active ? styles.tabTextActive : null,
        ]}
        testID="tab-text"
      >
        {text}
      </Text>
      {active && (
        <View
          style={styles.activeIndicator}
          testID="tab-active-indicator"
        ></View>
      )}
    </CustomPressable>
  );
};
