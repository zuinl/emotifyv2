import { userEvent } from "@testing-library/react-native";
import {
  UserEventInstance,
  UserEventSetupOptions,
} from "@testing-library/react-native/build/user-event/setup/setup";

export const getUserEvent = (
  options?: UserEventSetupOptions,
): UserEventInstance => {
  return userEvent.setup(options);
};
