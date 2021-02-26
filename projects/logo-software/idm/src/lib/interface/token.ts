export interface Validated {
  BrowserId: string;
  UserId: string;
  AppId: string;
  InternalData: any;
  IsKicked: boolean;
  LastAccessDate: string;
  UserName: string;
  IPAddr: string;
  UserAgent: string;
  CustomTokenExpireMinutes: string | null;
  RawKey: string;
  CustomExpireDate: string | null;
  Key: string;
  Type: string;
  SubjectId: string;
  ClientId: string;
  CreationTime: string;
  Expiration: string;
  Data: any;
}

export class GetToken {
  Value: {
    access_token: string,
  };
}
