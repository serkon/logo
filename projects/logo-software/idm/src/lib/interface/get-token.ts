/**
 * Login butonuna basınca şu adrese yönlendir
 * Request URL: http://dev-linux.logo-paas.com:5100/connect/authorize/callback?client_id=2519ef34-66a0-4e5b-a333-089eb34edfc5&redirect_uri=http%3A%2F%2Flocalhost%3A4200&response_type=code&scope=offline_access
 * Request Method: GET
 * Query String Params
 * {
 *   client_id: 2519ef34-66a0-4e5b-a333-089eb34edfc5
 *   redirect_uri: http://localhost:4200
 *   response_type: code
 *   scope: offline_access
 * }
 */
export const login = null;

/**
 * Bilgileri girdikten sonra seni tekrar kendi adresine code bilgisi ile yönlendirecek
 * Request URL: http://localhost:4200/?code=806070c4eb4480d91d39bbf9046f8d7b5cce7febf64465abe85cc864d4cf1f10&scope=offline_access
 */
export const redirect_login = {}

/**
 * Request Method: POST
 * Request URL: http://dev-linux.logo-paas.com:7000/api/Token/GetToken
 * Request Payload:
 * {
 * "RedirectUri":"http://localhost:4200",
 * "Code":"45d6bcd16087ceba657582dd72122bb7e9b7d508504e711ad60d2de9e9cb729d"
 * }
 */
export const GetToken = {
  'ContentType': null,
  'SerializerSettings': null,
  'StatusCode': null,
  'Value': {
    'acces_token': null,
    'access_token': '37d31a1a31676d1cfe2e7525773915f8c419dcc60fb3484e428315140e7c6f87',
    'token_type': null,
    'expires_in': null,
    'refresh_token': null,
    'result_code': null,
  },
};

/**
 * Request Method: GET
 * Request URL: http://dev-linux.logo-paas.com:5100/api/token/validate/37d31a1a31676d1cfe2e7525773915f8c419dcc60fb3484e428315140e7c6f87
 */
export const ValidateToken = {
  'BrowserId': '450B5EEACD13442BB98FEFF252FB08F5',
  'UserId': 'dccbd884-7e12-4d01-892b-f50a69f3f7fe',
  'AppId': '2519ef34-66a0-4e5b-a333-089eb34edfc5',
  'InternalData': {},
  'IsKicked': false,
  'LastAccessDate': '2021-02-23T22:14:42.583Z',
  'UserName': 'vadmin',
  'IPAddr': '212.252.63.100',
  'UserAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
  'CustomTokenExpireMinutes': null,
  'RawKey': '37d31a1a31676d1cfe2e7525773915f8c419dcc60fb3484e428315140e7c6f87',
  'CustomExpireDate': null,
  'Key': '9oh+HBKUnD+KBjzGAkhzeHMvU22/XbgfHRsNdAHDRO0=',
  'Type': 'reference_token',
  'SubjectId': 'LOGOIDM',
  'ClientId': '2519ef34-66a0-4e5b-a333-089eb34edfc5',
  'CreationTime': '2021-02-23T22:14:42Z',
  'Expiration': '2022-02-23T22:14:42Z',
  'Data': '{"Audiences":["http://ec2-34-246-169-3.eu-west-1.compute.amazonaws.com:5100/resources"],"Issuer":"http://ec2-34-246-169-3.eu-west-1.compute.amazonaws.com:5100","CreationTime":"2021-02-23T22:14:42Z","Lifetime":31536000,"Type":"access_token","ClientId":"2519ef34-66a0-4e5b-a333-089eb34edfc5","AccessTokenType":1,"Claims":[{"Type":"client_id","Value":"2519ef34-66a0-4e5b-a333-089eb34edfc5","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"scope","Value":"offline_access","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"scope","Value":"offline_access","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"sub","Value":"LOGOIDM","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"auth_time","Value":"1614118477","ValueType":"http://www.w3.org/2001/XMLSchema#integer"},{"Type":"idp","Value":"local","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"amr","Value":"pwd","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/userid","Value":"dccbd884-7e12-4d01-892b-f50a69f3f7fe","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/initAppId","Value":"2519ef34-66a0-4e5b-a333-089eb34edfc5","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/ipAddr","Value":"212.252.63.100","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/userAgentInfo","Value":"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/browserId","Value":"450B5EEACD13442BB98FEFF252FB08F5","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/lang","Value":"Turkish","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/langcode","Value":"tr-TR","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/email","Value":"vadmin@logo.com.tr","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/emailsecondary","Value":"","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/userid","Value":"dccbd884-7e12-4d01-892b-f50a69f3f7fe","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/username","Value":"vadmin","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/name","Value":"vadmin","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/surname","Value":"vadmin","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/isactive","Value":"True","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/userType","Value":"PublicUser","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/seclang","Value":"","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/seclangcode","Value":"","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/preflang","Value":"Turkish","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/preflangcode","Value":"tr-TR","ValueType":"http://www.w3.org/2001/XMLSchema#string"},{"Type":"http://www.logo.com.tr/claims/thirdPartyProviderType","Value":"-","ValueType":"http://www.w3.org/2001/XMLSchema#string"}],"Version":4}',
};

/**
 * Request URL: http://dev-linux.logo-paas.com:5100/api/users/list
 * Request Method: GET
 * Request Headers:
 * Authorization: Bearer 37d31a1a31676d1cfe2e7525773915f8c419dcc60fb3484e428315140e7c6f87
 * ids: dccbd884-7e12-4d01-892b-f50a69f3f7fe
 * lang?: tr-TR
 */
export const getUser = [
  {
    'UserId': 'dccbd884-7e12-4d01-892b-f50a69f3f7fe',
    'UserName': 'vadmin',
    'EMail': 'vadmin@logo.com.tr',
    'EMailSecondary': null,
    'Name': 'vadmin',
    'Surname': 'vadmin',
    'PhoneNumber': null,
    'IsActive': true,
    'UserType': 0,
    'SecondaryLang': null,
    'CreateDate': '2019-06-13T08:13:58.744948+00:00',
    'UpdateDate': null,
    'PasswordChangeDate': null,
    'ForceChangePassword': false,
    'TimeZoneName': 'Europe/Istanbul',
    'TimeZoneOffset': '+03',
    'PreferedLang': 'Turkish',
    'UserImage': null,
    'TemporaryIsActive': true,
    'ProviderDisplayName': null,
    'LastLoginTime': '2021-02-23T22:14:42.5830991+00:00',
    'PasswordPolicyDisabled': null,
    'PasswordExpirePeriodDisabled': null,
    'TwoFactorType': 0,
    'TwoFactorTypeByTenantForced': 0,
    'GoogleAuthenticatorKey': null,
    'SmsAuthenticatorKey': null,
  },
];

/**
 * Request URL: http://dev-linux.logo-paas.com:6900/api/users/dccbd884-7e12-4d01-892b-f50a69f3f7fe/defaulttenant?expandLevel=1&expand=Tenant
 * Request Headers
 * Authorization: Bearer 37d31a1a31676d1cfe2e7525773915f8c419dcc60fb3484e428315140e7c6f87
 * Query String Parameters:
 * {
 *  expandLevel: 1,
 *  expand: Tenant
 * }
 */
export const tenant = {
  'UserId': 'dccbd884-7e12-4d01-892b-f50a69f3f7fe',
  'TenantId': 'babeb0b0-13f4-4b3e-abd3-e1d38a612ff1',
  'IsAdmin': true,
  'IsDefault': true,
  'IsLogoUser': null,
  'State': 2,
  'CreateDate': '2019-06-13T08:13:58',
  'UpdateDate': '2019-06-13T12:03:53',
  'User': null,
  'Tenant': {
    'Id': 'babeb0b0-13f4-4b3e-abd3-e1d38a612ff1',
    'Name': 'J-Platform-Vaadin',
    'Title': 'J-Platform-Vaadin',
    'CommercialTitle': 'J-Platform-Vaadin',
    'LogicalState': 1,
    'ExtraData': '{}',
    'Code': 'JPV',
    'CreateDate': '2019-06-13T07:03:40',
    'IsLogoTenant': false,
    'Users': [],
    'IsDeveloperTenant': false,
    'HasChild': false,
  },
  'Id': 'fd7a6502-1c2c-4f9b-908b-5844e5b3c45e',
};

export const logout = {
  url: 'account/logout?redirect_uri=http://localhost:4200&appid=5e7bef1e-8fd9-4876-9b86-1ea233c0642c&forcesignout=true',
};
