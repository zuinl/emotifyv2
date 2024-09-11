import { Device } from "../services/common";

export type DeviceItemProps = Device & {
  onPress: () => void;
};
