export interface PaasUser {
  user?: {
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
        action?: string;
        icon?: string;
      }
    ]
    links?: [
      {
        name: string;
        link: string;
      }
    ],
    tanents?: {
      default: string;
      btnAction?: string;
      options?: [
        {
          name: string;
          id: string;
        }
      ]
    },
    shortcuts?: [
      {
        icon: string;
        class?: string;
        link: string;
      }
    ]
  }
}
