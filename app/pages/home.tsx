import { FlatList, Text, View } from "react-native";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages/home";
import { Header } from "../components/header/header";
import { TabMenu } from "../components/tab-menu/tab-menu";
import { useHomePage } from "../containers/use-home-page";
import { PlaylistCard } from "../components/playlist-card/playlist-card";
import { SongChip } from "../components/song-chip/song-chip";

import mkSongs from "../assets/mocks/songs.json";

const Home = () => {
  const { tab, onTabChange, playlists } = useHomePage();

  return (
    <BaseLayoutProvider baseViewProps={{ style: { padding: 0 } }}>
      <View style={styles.container}>
        <Header />
        <TabMenu activeTab={tab} onTabPress={onTabChange} />

        {tab === "now" && (
          <View>
            <Text style={texts.title3}>Suas playlists</Text>

            <FlatList
              data={playlists}
              renderItem={({ item }) => (
                <PlaylistCard
                  title={item.name}
                  imageUrl={item.images[0].url}
                  totalTracks={item.tracks.total}
                  onPress={() => {}}
                />
              )}
              keyExtractor={({ id }) => String(id)}
              horizontal
              style={styles.playlistsFlatlistContainer}
              contentContainerStyle={styles.playlistsContainer}
            />

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
