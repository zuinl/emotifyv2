import { TrackObject } from "./common/track.dto";

export type GetTopSongsDTO = {
  /**
   * URL da Web API que retorna os dados
   */
  href: string;
  /**
   * O número máximo de itens a retornar por vez
   */
  limit: number;
  /**
   * URL da Web API para retornar os próximos itens
   */
  next?: string;
  /**
   * URL da Web API para retornar os itens anteriores
   */
  previous?: string;
  /**
   * O offset de itens retornados
   */
  offset: number;
  /**
   * O total de itens disponíveis
   */
  total: number;
  /**
   * Lista de faixas mais ouvidas
   */
  items: TrackObject[];
};
