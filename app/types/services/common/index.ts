/**
 * O tipo do contexto atual
 */
export type ContextType = "artist" | "playlist" | "album" | "show";

/**
 * O estado de repetição
 */
export type RepeatState = "off" | "track" | "context";

/**
 * O tipo de dispositivo
 */
export type DeviceType = "computer" | "smartphone" | "speaker";

/**
 * O tipo de faixa atualmente tocando
 */
export type PlayingType = "track" | "episode" | "ad" | "unknown";

/**
 * Objeto com URLs externas
 */
export type ExternalUrls = {
  spotify: string;
};

/**
 * O tipo do álbum
 */
export type AlbumType = "album" | "single" | "compilation";

/**
 * Motivos para restrição
 */
export type RestrictionReason = "market" | "product" | "explicit";

/**
 * Mercados (países) onde o objeto está disponível.
 * Lista com os códigos ISO dos países.
 * @example ["BR", "AR"]
 */
export type AvailableMarkets = string[];

/**
 * Precisão de data de lançamento
 */
export type ReleaseDatePrecision = "year" | "month" | "day";

/**
 * Dados dos IDs externos
 */
export type ExternalIds = {
  /**
   * International Standard Recording Code
   */
  isrc: string;
  /**
   * International Article Number
   */
  ean: string;
  /**
   * Universal Product Code
   */
  upc: string;
};

export type PlayerActions = {
  interrupting_playback?: boolean;
  pausing?: boolean;
  resuming?: boolean;
  seeking?: boolean;
  skipping_next?: boolean;
  skipping_prev?: boolean;
  toggling_repeat_context?: boolean;
  toggling_shuffle?: boolean;
  toggling_repeat_track?: boolean;
  transferring_playback?: boolean;
};
