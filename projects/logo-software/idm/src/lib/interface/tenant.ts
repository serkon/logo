import { User } from './user';

/**
 * Tenant information
 */
export class Tenant {
  UserId: string;
  TenantId: string;
  IsAdmin: boolean;
  IsDefault: boolean;
  IsLogoUser?: boolean;
  State: number;
  CreateDate: string;
  UpdateDate: string;
  User: User;
  Tenant: {
    Id: string;
    Name: string;
    Title: string;
    CommercialTitle: string;
    LogicalState: number;
    ExtraData: string;
    Code: string;
    CreateDate: string;
    IsLogoTenant: boolean;
    Users: User[];
    IsDeveloperTenant: boolean;
    HasChild: boolean;
  };
  Id: string;
}

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
// export const tenant = {
//   'UserId': 'dccbd884-7e12-4d01-892b-f50a69f3f7fe',
//   'TenantId': 'babeb0b0-13f4-4b3e-abd3-e1d38a612ff1',
//   'IsAdmin': true,
//   'IsDefault': true,
//   'IsLogoUser': null,
//   'State': 2,
//   'CreateDate': '2019-06-13T08:13:58',
//   'UpdateDate': '2019-06-13T12:03:53',
//   'User': null,
//   'Tenant': {
//     'Id': 'babeb0b0-13f4-4b3e-abd3-e1d38a612ff1',
//     'Name': 'J-Platform-Vaadin',
//     'Title': 'J-Platform-Vaadin',
//     'CommercialTitle': 'J-Platform-Vaadin',
//     'LogicalState': 1,
//     'ExtraData': '{}',
//     'Code': 'JPV',
//     'CreateDate': '2019-06-13T07:03:40',
//     'IsLogoTenant': false,
//     'Users': [],
//     'IsDeveloperTenant': false,
//     'HasChild': false,
//   },
//   'Id': 'fd7a6502-1c2c-4f9b-908b-5844e5b3c45e',
// };
