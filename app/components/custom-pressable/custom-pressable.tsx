import { Pressable, PressableProps } from "react-native";
import { DEFAULT_PRESSABLE_OPACITY } from "../../styles/common";

export const CustomPressable = ({
  onPress,
  testID,
  disabled,
  children,
  customStyles,
}: PressableProps & { customStyles?: Record<string, any> }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? DEFAULT_PRESSABLE_OPACITY : 1,
          ...customStyles,
        },
      ]}
      onPress={onPress}
      testID={testID}
      disabled={disabled}
    >
      {children}
    </Pressable>
  );
};
