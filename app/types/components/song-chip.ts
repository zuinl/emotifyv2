export type SongChipProps = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  liked: boolean;
  playing: boolean;
  onPress: (songId: number) => void;
  toggleLike: (songId: number) => void;
};
