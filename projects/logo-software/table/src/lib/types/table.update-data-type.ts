import { TableColumn } from './table.column';

/**
 * Data editing variable interface.
 * When set table editable, and cell data changed
 */
export interface TableUpdateDataType {
  /**
   * Current column information
   */
  column: TableColumn,
  /**
   * Current row information, it will give the information with changed the latest data.
   */
  row: any,
  /**
   * The dataset of the table currently showing with changed data.
   */
  showingCurrently: any[],
  /**
   * The dataset of the table currently showing before changed.
   */
  showingOriginal: any[],
  /**
   * The full original dataset given to the table
   */
  fullOriginal: any[],
  /**
   * The index of the row of the currently set.
   */
  index: number,
  /**
   * parent row data, it necessary when table in table situation.
   */
  parentRow: any,
  /**
   * parent row index, it necessary when table in table situation.
   */
  parentIndex: number,
  /**
   * Clear is a method for clear the data from add new area or updated when add new record complete event triggered.
   * It is optional, default it will clear inserted data when data pushed.
   *
   * ```typescript
   *   // It will clear data when update event triggered.
   *   onUpdateAccepted(data: TableUpdateDataType) {
   *     data.clear(true, data); // data is require for update with old one.
   *   }
   *
   *   // It will clear data when add new record triggered.
   *     onCreateAccepted(data: TableUpdateDataType) {
   *       data.clear(true); // Just send true, data is not need onCreateAccepted
   *    }
   * ```
   */
  clear?: (status: boolean, data?: TableUpdateDataType) => void
}
