import { ExcelSettingType } from '@logo-software/excel';
import { TableColumn } from './table.column';
import { TableHead } from './table.head';
import { Events } from './event.model';
import { TableAction } from './table.action';
import { TableComponent } from '../table.component';

/**
 * The Table Meta class is used for type definition.
 */
export interface TableMeta<T> {
  /**
   * Table service url and method definition `{ url: string, method?: string }`
   */
  service?: { url: string, method?: string };
  /**
   * Table column definition pls look [TableColumn](/docs/modules/table-module#tablecolumn)
   */
  columns: TableColumn[];
  /**
   * Table head definition for added extra added as child `td` [TableHead](/docs/modules/table-module#tablehead)
   */
  heads?: TableHead[];
  /**
   * Will be deprecated
   */
  events?: Events;
  /**
   * Table action adds new buttons to table for make chane outside [TableAction](/docs/modules/table-module#tableaction)
   */
  actions?: TableAction[];
  /**
   * It defines the HTTP response data resource root path.
   */
  mapPath?: string;
  status?: boolean;
  /**
   * Selected records
   */
  list?: any[];
  /**
   * The showing records
   */
  rows?: T[];
  /**
   *
   */
  excel?: ExcelSettingType;
  serverSide?: boolean;
  editable?: boolean;
  create?: boolean;
  reference?: TableComponent;
  refButtonStatus?: boolean;
  automatic?: boolean;
  multiSelect?: boolean;
  refresh?: boolean;
  delete?: boolean;
  hasPaging?: boolean;
  hasFilter?: boolean;
  index?: boolean;
  indexStart?: number;
  sort?: boolean;
  height?: string;
  draggable?: boolean;
  paas?: boolean;
  oDataIdentityField?: string;
  oDataStatus?: boolean;
  parentRow?: any;
  parentIndex?: number;
}
