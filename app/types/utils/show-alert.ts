export type ShowAlertProps = {
  /**
   * Título do alerta
   */
  title: string;
  /**
   * Mensagem do alerta
   */
  message: string;
  /**
   * Texto do botão de cancelar/fechar
   * @default "Cancelar"
   */
  cancelText?: string;
  /**
   * Texto do botão de confirmar
   * @default "OK"
   */
  confirmText?: string;
  /**
   * Indica se o botão de cancelar deve ser exibido
   * @default false
   */
  showCancelButton?: boolean;
  /**
   * Indica se o botão de confirmar deve ser exibido
   * @default false
   */
  showConfirmButton?: boolean;
  /**
   * Callback para o botão de cancelar/fechar.
   * Se não informado, o botão de cancelar é oculto.
   * @default undefined
   * @returns `void`
   */
  onCancelPress?: () => void;
  /**
   * Callback para o botão de confirmar.
   * Se não informado, o botão de confirmação é oculto.
   * @default undefined
   * @returns `void`
   */
  onConfirmPress?: () => void;
  /**
   * Callback que é executada quando o alerta for fechado (seja pelo cancelamento ou pela confirmação).
   * **Funciona apenas para o Android**.
   * @default undefined
   * @returns void
   */
  onDismiss?: () => void;
  /**
   * Indica se o alert pode ser fechado ao tocar fora da área.
   * **Funciona apenas no Android**.
   * @default false
   */
  cancelable?: boolean;
};
