export type ButtonProps = {
  variant: ButtonVariant;
  fill: ButtonFill;
  text: string;
  disabled?: boolean;
  customStyle?: Record<string, string | number>;
  customTextStyle?: Record<string, string | number>;
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
};

export type ButtonVariant = "primary" | "secondary";

export type ButtonFill = "contained" | "ghost";
