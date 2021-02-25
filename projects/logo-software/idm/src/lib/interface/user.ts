export class Role {
  name: string;
}

export class Roles {
  roles: Role[];
}

export class User extends Roles {
  UserId: string;
  UserName: string;
  EMail: string;
  EMailSecondary?: string;
  Name: string;
  Surname: string;
  PhoneNumber?: string;
  IsActive: boolean;
  UserType: number;
  SecondaryLang?: string;
  CreateDate: string;
  UpdateDate?: string;
  PasswordChangeDate?: string;
  ForceChangePassword: boolean;
  TimeZoneName: string;
  TimeZoneOffset: string;
  PreferedLang: string;
  UserImage?: string;
  TemporaryIsActive: boolean;
  ProviderDisplayName?: string;
  LastLoginTime: string;
  PasswordPolicyDisabled?: string;
  PasswordExpirePeriodDisabled?: string;
  TwoFactorType: number;
  TwoFactorTypeByTenantForced: number;
  GoogleAuthenticatorKey?: string;
  SmsAuthenticatorKey?: string;
}
