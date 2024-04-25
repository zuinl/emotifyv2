import { View } from "react-native";
import { styles } from "@styles/components/base-layout/styles";
import { BaseLayoutProps } from "@tps/components/base-layout";

export const BaseLayout = ({ children, viewProps }: BaseLayoutProps) => {
    return (
        <View {...viewProps} style={[styles.container, viewProps?.style]}>
            {children}
        </View>
    );
};
