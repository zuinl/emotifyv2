import {
  ContextType,
  Device,
  ExternalUrls,
  PlayerActions,
  PlayingType,
  RepeatState,
} from "./common";
import { TrackObject } from "./common/track.dto";

export type GetPlaybackDTO = {
  /**
   * Dados do dispositivo atual
   */
  device: Device;
  /**
   * O estado de repetição
   */
  repeat_state: RepeatState;
  /**
   * Indica se o modo aleatório está ativo
   */
  shuffle_state: boolean;
  /**
   * Indica se o Smart Shuffle está ativo
   */
  smart_shuffle: boolean;
  /**
   * Dados do contexto atual
   */
  context?: {
    /**
     * O tipo de contexto
     */
    type: ContextType;
    /**
     * URL da API com detalhes da faixa atual
     */
    href: string;
    /**
     * URLs externas
     */
    external_urls: ExternalUrls;
    /**
     * URL do contexto no Spotify
     */
    uri: string;
  };
  /**
   * Timestamp do retorno dos dados
   */
  timestamp: number;
  /**
   * Progresso da faixa atual (em ms)
   */
  progress_ms: number;
  /**
   * Indica se está atualmente tocando
   */
  is_playing: boolean;
  /**
   * Indica que tipo de faixa está tocando no momento
   */
  currently_playing_type: PlayingType;
  item: TrackObject;
  /**
   * Indica quais ações estão disponíveis para execução
   */
  actions: {
    disallows: PlayerActions;
    allows: PlayerActions;
  };
};
