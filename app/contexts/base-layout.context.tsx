import { StatusBar } from "expo-status-bar";
import { createContext } from "react";
import { BaseLayoutProviderProps } from "@tps/contexts/base-layout.context";
import { BaseLayout } from "@components/base-layout/base-layout";

const BaseLayoutContext = createContext(null);

export const BaseLayoutProvider = ({
    children,
    baseViewProps,
}: BaseLayoutProviderProps) => {
    return (
        <BaseLayoutContext.Provider value={null}>
            <StatusBar style="dark" />

            <BaseLayout viewProps={baseViewProps}>{children}</BaseLayout>
        </BaseLayoutContext.Provider>
    );
};
