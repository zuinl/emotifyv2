import { PlaylistDTO } from "./common/playlist.dto";

export type GetPlaylistsDTO = {
  /**
   * A URL requisitada
   */
  href: string;
  /**
   * O limite de itens no retorno atual
   */
  limit: number;
  /**
   * A URL para consultar os próximos itens
   */
  next?: string;
  /**
   * O offset dos itens retornados
   */
  offset: number;
  /**
   * A URL para consultar os itens anteriores
   */
  previous?: string;
  /**
   * O total de itens no retorno atual
   */
  total: number;
  /**
   * A lista de itens
   */
  items: PlaylistDTO[];
};
