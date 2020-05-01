/**
 * Filter type effects table `th` input's type property. Also, it effect the `td` display format.
 *
 * ```html
 * // In filter area of the table
 * <th><input type='{{column.filterType}}' /></th>
 *
 * // In `td` area of the table
 * <td>{{'value of the data' | format : column.filterType}}
 *  ```
 *
 * - text
 * - range
 * - percent
 * - currency
 * - number
 * - datetime
 * - date
 * - time
 * - custom (will be text)
 */
export enum FilterType {
  CUSTOM = 'custom',
  TEXT = 'text',
  RANGE = 'range',
  PERCENT = 'percent',
  CURRENCY = 'currency',
  NUMBER = 'number',
  DATE = 'date',
  DATETIME = 'datetime',
  TIME = 'time',
}
