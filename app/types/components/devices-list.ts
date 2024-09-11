import { Device } from "../services/common";

export type DevicesListProps = {
  devices: Device[];
  onDevicePress: (deviceId: string) => void;
  onClose: () => void;
};
