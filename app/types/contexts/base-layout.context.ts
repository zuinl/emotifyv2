import { ReactNode } from "react";
import { ViewProps } from "react-native";

export type BaseLayoutProviderProps = {
  children: ReactNode;
  baseViewProps?: ViewProps;
};
