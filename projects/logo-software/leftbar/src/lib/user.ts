/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

/**
 * User informations interface details
 */
export interface PaasUser {
  /**
   * User name in string
   */
  name: string;
  /**
   * User title
   */
  title: string;
  /**
   * User avatar if available
   */
  avatar?: string;
  /**
   * User notification counts if there is
   */
  notifications?: number;
  /**
   * Dynamically configurable user information boxes.
   */
  infos: {
    /**
     * Column grid width. Grid divided into 12 pieces like bootstrap grid. you can use 1-12
     */
    col: number;
    /**
     * Info reference key in interface
     */
    reference: string;
    /**
     * Info box title
     */
    title?: string;
    /**
     * Info box description
     */
    desc?: string;
    /**
     * Info box notification badge
     */
    badge?: boolean;
    /**
     * Info box numberic value
     */
    count?: number;
    /**
     * Info box link
     */
    link?: string;
    /**
     * Info box parameter that fired by an output.
     */
    actionParam?: string;
    /**
     * Info box icon.
     */
    icon?: string;
  }[],
  /**
   * User menu items
   */
  links?: {
    name: string;
    link: string;
  }[],
  /**
   * User tenants
   */
  tenants?: {
    /**
     * Default tenant name
     */
    default: string;
    /**
     * Available tenant list
     */
    options?: {
      name: string;
      id: string;
    }[],
  },
  /**
   * User applications
   */
  applications?: {
    /**
     * Default application name
     */
    default: string;
    /**
     * Default application icon
     */
    defaultIcon: string;
    /**
     * User applications list
     */
    options?: {
      logo: string;
      name: string;
      id: string;
    }[],
  },
  /**
   * User setted shortcuts if available
   */
  shortcuts?: {
    icon: string;
    class?: string;
    name: string;
    link: string;
  }[],
}
