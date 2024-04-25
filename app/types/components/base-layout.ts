import { ReactNode } from "react";
import { ViewProps } from "react-native";

export type BaseLayoutProps = {
  children: ReactNode;
  viewProps?: ViewProps;
};
