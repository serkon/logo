import { TableComponent } from '../table.component';

/**
 * You can set table actions from another component with this.table.actions
 *
 * __Usage Example__
 *
 * <sub>typescript</sub>
 *
 * ```typescript
 * this.table.actions = [{
 *   display: 'new',
 *   click: (table: TableComponent) => this.openSaveModal(table),
 *   className: 'prm',
 *   disable: false
 * }]
 * ```
 */
export class TableAction {
  /**
   * Callback event when action clicked will be triggered.
   * Table component will pass to parameters to this function.
   */
  public click: (table: TableComponent) => void;
  /**
   * Will be displayed name on the button
   */
  public display: string;
  /**
   * Action button status. Default status is false.
   */
  public disable ? = false;
  /**
   * Style class name of the action button
   */
  public className?: string;
  /**
   * Style class name with conditional
   */
  public classFunction?: (table: TableComponent) => string;
}
