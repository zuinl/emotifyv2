export type PlayingFooterProps = {
  /**
   * Título da música
   */
  songTitle: string;
  /**
   * URL da imagem da música
   */
  songImageUrl: string;
  /**
   * Nome do artista
   */
  songArtistName: string;
  /**
   * Duração da música (em ms)
   */
  songDuration: number;
  /**
   * Posição atual da música (em ms)
   */
  currentPosition: number;
  /**
   * The progress of the current playing song, in %
   */
  songPlayingProgress: number;
  /**
   * Indica se está atualmente tocando
   */
  playing: boolean;
  /**
   * Callback para o toque no botão de play/pause
   * @returns void
   */
  onPlayClick: () => void;
  /**
   * Callback para o toque na seta de abertura
   * @returns void
   */
  onArrowClick: () => void;
};
