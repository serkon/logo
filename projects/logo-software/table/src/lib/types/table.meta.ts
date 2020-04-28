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
  service?: { url: string, method?: string };
  columns: TableColumn[];
  heads?: TableHead[];
  events?: Events;
  actions?: TableAction[];
  mapPath?: string;
  status?: boolean;
  list?: any[];
  rows?: T[];
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
