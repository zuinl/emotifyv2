import { FlatList, Text, View } from "react-native";
import { styles } from "@styles/components/devices-list/styles";
import { colors } from "@styles/colors";
import { DevicesListProps } from "@tps/components/devices-list";
import { texts } from "@styles/texts";
import { DeviceItem } from "./device-item/device-item";
import { CustomPressable } from "../custom-pressable/custom-pressable";

export const DevicesList = ({
  devices,
  onDevicePress,
  onClose,
}: DevicesListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={texts.title3}>Dispositivos</Text>
        <FlatList
          data={devices}
          renderItem={({ item }) => (
            <DeviceItem {...item} onPress={() => onDevicePress(item.id)} />
          )}
          keyExtractor={({ id }) => id}
          contentContainerStyle={styles.devicesContainer}
        />
        <CustomPressable customStyles={styles.closeContainer} onPress={onClose}>
          <Text style={[texts.text2, { color: colors.secondary }]}>Fechar</Text>
        </CustomPressable>
      </View>
    </View>
  );
};
