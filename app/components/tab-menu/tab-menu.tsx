import { ScrollView, View } from "react-native";
import { styles } from "@styles/components/tab-menu/styles";
import { Tab } from "./tab";
import { TabMenuProps } from "@tps/components/tab-menu";

export const TabMenu = ({ activeTab, onTabPress }: TabMenuProps) => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <Tab
          text="Agora"
          onPress={() => onTabPress("now")}
          active={activeTab === "now"}
        />
        {/* <Tab
          text="Playlists"
          onPress={() => onTabPress("playlists")}
          active={activeTab === "playlists"}
        /> */}
        {/* <Tab
          text="Artistas"
          onPress={() => onTabPress("artists")}
          active={activeTab === "artists"}
        /> */}
      </ScrollView>
    </View>
  );
};
