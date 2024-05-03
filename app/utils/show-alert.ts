import { Alert, AlertButton } from "react-native";
import { ShowAlertProps } from "../types/utils/show-alert";

/**
 * Exibe um alerta nativo do sistema operacional, similar a um modal.
 * @returns void
 */
export const showAlert = ({
  title,
  message,
  cancelText,
  confirmText,
  cancelable,
  showCancelButton,
  showConfirmButton,
  onCancelPress,
  onConfirmPress,
  onDismiss,
}: ShowAlertProps): void => {
  const buttons: AlertButton[] = [];

  if (showCancelButton) {
    buttons.push({
      text: cancelText ?? "Cancelar",
      onPress: onCancelPress,
      style: "cancel",
    });
  }

  if (showConfirmButton) {
    buttons.push({
      text: confirmText ?? "OK",
      onPress: onConfirmPress,
    });
  }

  Alert.alert(title, message, buttons, { onDismiss, cancelable });
};
