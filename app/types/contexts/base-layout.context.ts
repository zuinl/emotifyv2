import { ReactNode } from "react";
import { ViewProps } from "react-native";

export type BaseLayoutProviderProps = {
  children: ReactNode;
  baseViewProps?: ViewProps;
  /**
   * Indica se deve ocultar o componente tocador do rodapé
   * @default false
   */
  noPlayingFooter?: boolean;
};
