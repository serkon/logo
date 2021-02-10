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
 * Tree item interface detail
 */
export interface Tree {
  /**
   * Optional, id of the item if it comes from database,
   */
  id?: any;
  /**
   * Menu item text to be displayed to the user
   */
  name: string;
  /**
   * group
   */
  group?: boolean;
  /**
   * Class names to be added to menu item
   */
  classes?: string;
  /**
   * Class names to be added to menu item icons
   */
  iconClasses?: string;
  /**
   * Checkbox will/won't be shown before item
   */
  optional?: boolean;
  /**
   * Custom icon images such as SVGs can be set to the item
   */
  iconPath?: string;
  /**
   * Route information to be directed when clicked
   */
  link?: string;
  /**
   * Sets query parameters to the URL.
   */
  params?: { [key: string]: any };
  /**
   * sub menu container
   */
  children?: Tree[];
  /**
   * Enum values required for authorization and authentication operations
   */
  role?: string;
  /**
   * The variable that defines whether the menu item is open or not.
   */
  isOpen?: boolean;
}
