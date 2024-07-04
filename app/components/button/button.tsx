import { Text, Pressable } from "react-native";
import { makeStyles } from "@styles/components/button/styles";
import { ButtonProps } from "@tps/components/button";

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
    <Pressable
      style={styles.container}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      testID="button-pressable"
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
