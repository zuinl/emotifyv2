export type PlaylistCardProps = {
  /**
   * Título da playlist
   */
  title: string;
  /**
   * Número do total de faixas na playlist
   */
  totalTracks: number;
  /**
   * URL da imagem da playlist
   */
  imageUrl: string;
  /**
   * Callback ao pressionar a playlist
   * @returns void
   */
  onPress: () => void;
};
