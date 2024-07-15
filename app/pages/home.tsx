import { FlatList, Text, View } from "react-native";
import { BaseLayoutProvider } from "@contexts/base-layout.context";
import { texts } from "@styles/texts";
import { styles } from "@styles/pages/home";
import { Header } from "../components/header/header";
import { TabMenu } from "../components/tab-menu/tab-menu";
import { useHomePage } from "../containers/use-home-page";
import { PlaylistCard } from "../components/playlist-card/playlist-card";
import { SongChip } from "../components/song-chip/song-chip";
import { transformDuration } from "../utils/transform-duration";

const Home = () => {
  const { tab, onTabChange, playlists, topSongs } = useHomePage({});

  return (
    <BaseLayoutProvider baseViewProps={{ style: { padding: 0 } }}>
      <View style={styles.container}>
        <Header onSearchPress={() => {}} onOptionsPress={() => {}} />
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
            <FlatList
              data={topSongs}
              renderItem={({ item }) => {
                return (
                  <SongChip
                    id={item.id}
                    title={item.name}
                    artist={item.artists[0].name}
                    duration={transformDuration(item.duration_ms)}
                    liked={false}
                    onToggleLike={() => {}}
                  />
                );
              }}
              keyExtractor={(item) => String(item.id)}
              style={styles.songListFlatlistContainer}
              contentContainerStyle={styles.songListContainer}
            />
          </View>
        )}
      </View>
    </BaseLayoutProvider>
  );
};

export default Home;
