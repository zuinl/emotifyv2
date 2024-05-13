export type SongChipProps = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  liked: boolean;
  toggleLike: (songId: string) => void;
};
