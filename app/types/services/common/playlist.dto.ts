import { ImagesDTO } from "./images.dto";

export type PlaylistDTO = {
    /**
     * Indica se a playlist é colaborativa
     */
    collaborative: boolean;
    /**
     * Descrição da playlist
     */
    description: string;
    /**
     * URLs relacionadas à playlist
     */
    external_urls: {
      /**
       * URL da playlist no Spotify
       */
      spotify: string;
    };
    /**
     * Link da API que retorna os dados da API
     */
    href: string;
    /**
     * ID da playlist no Spotify
     */
    id: String;
    /**
     * Lista de imagens da playlist
     */
    images: ImagesDTO[];
    /**
     * Nome da playlist
     */
    name: string;
    /**
     * Dados do proprietário da playlist
     */
    owner: {
      /**
       * URLs relacionadas ao proprietário
       */
      external_urls: {
        /**
         * URL do perfil do proprietário no Spotify
         */
        spotify: string;
      };
      /**
       * Dados dos seguidores do proprietário
       */
      followers: {
        /**
         * Não suportado no momento
         */
        href?: string;
        /**
         * Total de seguidores do proprietário
         */
        total: number;
      };
      /**
       * Link da API que retorna dados do proprietário
       */
      href: string;
      /**
       * ID do proprietário no Spotify
       */
      id: string;
      /**
       * Tipo do objeto
       */
      type: "user";
      /**
       * URL do usuário
       */
      uri: string;
      /**
       * Nome de exibição do proprietário
       */
      display_name?: string;
    };
    /**
     * Indica se a playlist é pública
     */
    public: boolean;
    /**
     * Identificação da versão atual da playlist
     */
    snapshot_id: string;
    /**
     * Dados das músicas da playlist
     */
    tracks: {
      /**
       * Link da API que retorna dados completos das músicas da playlist
       */
      href: string;
      /**
       * Total de músicas na playlist
       */
      total: number;
    };
    /**
     * Tipo do objeto
     */
    type: "playlist";
    /**
     * URL da playlist no Spotify
     */
    uri: string;
  };