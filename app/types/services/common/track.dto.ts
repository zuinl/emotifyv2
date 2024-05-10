import {
  AlbumType,
  AvailableMarkets,
  ExternalIds,
  ExternalUrls,
  ReleaseDatePrecision,
  RestrictionReason,
} from ".";
import { ImagesDTO } from "./images.dto";

export type TrackObject = {
  album: TrackAlbum;
  artists: TrackArtist[];
  available_markets: AvailableMarkets;
  /**
   * Número do disco da faixa (sempre 1 a não ser que o álbum tenha mais de um disco)
   */
  disc_number: number;
  /**
   * Duração da faixa (em ms)
   */
  duration_ms: number;
  /**
   * Indica se a faixa tem letras explícitas
   * @example true = "Sim"
   * @example false = "Não OU desconhecido"
   */
  explict: boolean;
  external_ids: ExternalIds;
  /**
   * URL da API com detalhes da faixa
   */
  href: string;
  /**
   * Identificador da faixa
   */
  id: string;
  /**
   * Indica se a faixa pode ser tocada
   */
  is_playable: boolean;
  restrictions: RestrictionReason;
  /**
   * Nome da faixa
   */
  name: string;
  /**
   * Índica de popularidade da faixa
   */
  popularity: number;
  /**
   * URL para preview de 30 segundos
   */
  preview_url?: string;
  /**
   * Número da faixa no disco
   */
  track_number: number;
  /**
   * Tipo do objeto
   */
  type: "track";
  /**
   * URL da faixa no Spotify
   */
  uri: string;
  /**
   * Indica se a faixa é de um arquivo local
   */
  is_local: boolean;
};

type TrackAlbum = {
  album_type: AlbumType;
  /**
   * Número de faixas no álbum
   */
  total_tracks: number;
  available_markets: AvailableMarkets;
  external_urls: ExternalUrls;
  /**
   * URL da API com detalhes do álbum
   */
  href: string;
  /**
   * Identificador do álbum
   */
  id: string;
  images: ImagesDTO[];
  /**
   * Nome do álbum
   */
  name: string;
  /**
   * Data de lançamento do álbum
   */
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  restrictions: {
    reason: RestrictionReason;
  };
  /**
   * Tipo de objeto
   */
  type: "album";
  /**
   * URL do álbum no Spotify
   */
  uri: string;
  artists: AlbumArtist[];
};

type AlbumArtist = {
  external_urls: ExternalUrls;
  /**
   * URL da API com detalhes do artista
   */
  href: string;
  /**
   * Identificador do artista
   */
  id: string;
  /**
   * Nome do artista
   */
  name: string;
  /**
   * Tipo do objeto
   */
  type: "artist";
  /**
   * URL do artista no Spotify
   */
  uri: string;
};

type TrackArtist = {
  external_urls: ExternalUrls;
  /**
   * Dados de seguidores do artista
   */
  followers: {
    /**
     * URL da API com detalhes
     */
    href?: string;
    /**
     * Total de seguidores do artista
     */
    total: number;
  };
  /**
   * Lista de gêneros do artista
   */
  genres: string[];
  /**
   * URL da API com detalhes do artists
   */
  href: string;
  /**
   * Identificador do artista
   */
  id: string;
  images: ImagesDTO[];
  /**
   * Nome do artista
   */
  name: string;
  /**
   * Popularidade do artista
   */
  popularity: number;
  /**
   * Tipo do objeto
   */
  type: "artist";
  /**
   * URL do artista no Spotify
   */
  uri: string;
};
