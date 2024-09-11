import { Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "@styles/components/devices-list/device-item/styles";
import { colors } from "@styles/colors";
import { DeviceItemProps } from "@tps/components/device-item";
import { texts } from "@styles/texts";

export const DeviceItem = ({
  name,
  type,
  is_active,
  onPress,
}: DeviceItemProps) => {
  let deviceIcon = "motion-play";
  switch (type) {
    case "Computer":
      deviceIcon = "laptop";
      break;
    case "Smartphone":
      deviceIcon = "cellphone";
      break;
    case "Speaker":
      deviceIcon = "speaker";
      break;
  }
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {/* TODO: padronizar tamanho dos ícones */}
        <MaterialCommunityIcons
        // @ts-expect-error ícone condicional
          name={deviceIcon}
          color={is_active ? colors.primary : colors.lightGrey}
          size={28}
        />
        <Text style={texts.text2}>{name}</Text>
      </View>
    </Pressable>
  );
};
