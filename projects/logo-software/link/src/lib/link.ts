/**
 * definition of link interface
 */
export interface Link {
  /**
   * display text will be visible for click
   */
  display: string;
  /**
   * redirection address will be load
   */
  url: string;
  /**
   * description will use for title definition of links
   */
  description?: string;
  /**
   * it define given url is local or external, if external it will redirect to this url
   */
  external?: boolean;
  /**
   * if it is a anchor link give the target `id` value
   */
  fragment?: string;
  /**
   * style classes will be give to the link
   */
  classes?: string[];
  /**
   * the event when clicked to the link
   * @param event
   */
  click?: (event: Event) => void;
}
