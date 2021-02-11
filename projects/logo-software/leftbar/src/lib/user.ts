/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

export interface PaasUser {
  name: string;
  title: string;
  avatar?: string;
  notifications?: number;
  infos: [
    {
      col: number;
      reference: string;
      title?: string;
      desc?: string;
      badge?: boolean;
      count?: number;
      link?: string;
      actionParam?: string;
      icon?: string;
    }
  ]
  links?: [
    {
      name: string;
      link: string;
    }
  ],
  tenants?: {
    default: string;
    options?: [
      {
        name: string;
        id: string;
      }
    ]
  },
  applications?: {
    default: string;
    defaultIcon: string;
    options?: [
      {
        logo: string;
        name: string;
        id: string;
      }
    ]
  },
  shortcuts?: [
    {
      icon: string;
      class?: string;
      name: string;
      link: string;
    }
  ]
}
