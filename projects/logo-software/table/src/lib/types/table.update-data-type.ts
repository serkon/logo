import { TableColumn } from './table.column';

/**
 * Data editing variable interface
 */
export interface TableUpdateDataType {
  column: TableColumn,
  row: any,
  showingCurrently: any[],
  showingOriginal: any[],
  fullOriginal: any[],
  index: number,
  parentRow: any,
  parentIndex: number,
  clear?: (status: boolean, data?: TableUpdateDataType) => void
}
