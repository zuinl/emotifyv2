import { FlatList, ScrollView, Text, View } from "react-native";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages/home";
import { Header } from "../components/header/header";
import { TabMenu } from "../components/tab-menu/tab-menu";
import { useHomePage } from "../containers/use-home-page";
import { PlaylistCard } from "../components/playlist-card/playlist-card";
import { homeBGUrl } from "../constants/images";
import { SongChip } from "../components/song-chip/song-chip";

import mkSongs from "../assets/mocks/songs.json";

const Home = () => {
  const { tab, onTabChange } = useHomePage();
  return (
    <BaseLayoutProvider baseViewProps={{ style: { padding: 0 } }}>
      <View style={styles.container}>
        <Header />
        <TabMenu activeTab={tab} onTabPress={onTabChange} />

        {tab === "now" && (
          <View>
            <Text style={texts.title3}>Suas playlists</Text>

            <View style={styles.scrollContainer}>
              <ScrollView contentContainerStyle={styles.playlistsContainer}>
                <PlaylistCard
                  title="bad guy"
                  duration="1h43"
                  onPress={() => {}}
                  imageUrl={homeBGUrl}
                />
                <PlaylistCard
                  title="bad guy"
                  duration="1h43"
                  onPress={() => {}}
                  imageUrl={homeBGUrl}
                />
                <PlaylistCard
                  title="bad guy"
                  duration="1h43"
                  onPress={() => {}}
                  imageUrl={homeBGUrl}
                />
              </ScrollView>
            </View>

            <Text style={texts.title3}>Mais ouvidas</Text>
            <View style={styles.songListContainer}>
              <FlatList
                data={mkSongs}
                renderItem={({ item }) => (
                  <SongChip
                    {...item}
                    onPress={() => {}}
                    toggleLike={() => {}}
                  />
                )}
                keyExtractor={(item) => String(item.id)}
              />
            </View>
          </View>
        )}
      </View>
    </BaseLayoutProvider>
  );
};

export default Home;
