import { Text } from "react-native";
import { makeStyles } from "@styles/components/button/styles";
import { ButtonProps } from "@tps/components/button";
import { CustomPressable } from "../custom-pressable/custom-pressable";

export const Button = ({
  variant,
  fill,
  disabled,
  text,
  customStyle,
  customTextStyle,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
}: ButtonProps) => {
  const styles = makeStyles(variant, fill, customStyle, customTextStyle);

  return (
    <CustomPressable
      customStyles={styles.container}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      testID="button-pressable"
    >
      <Text style={styles.text}>{text}</Text>
    </CustomPressable>
  );
};
