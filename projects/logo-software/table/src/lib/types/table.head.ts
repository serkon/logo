/**
 * This input adds custom extra thead to and tbody columns to table.
 * If custom coded html need to be inserted between table columns, this is the solution.
 *
 * __Usage Example__
 *
 * <sub>typescript</sub>
 * ```typescript
 *    this.unassigned.theads: [{display: 'Onay', className:'some-class-name'}]
 *  ```
 * Add some <ng-template> to between `<log-table>***here***</log-table>` tag using below code with `#columns` reference.
 *
 * <sub>html</sub>
 * ```html
 * <logo-table
 *  [automatic]="false"
 *  [columns]="unassigned.columns"
 *  [heads]="unassigned.theads"
 *  [hasFilter]="false"
 *  [hasPaging]="false"
 *  [height]="'600px'"
 * >
 * <ng-template
 *   #columns // -> It must be added to the template tag for understanding that is a table head template
 *   let-actions="actions" // access table actions
 *   let-columns="columns" // table columns
 *   let-filter="filter" // table filters
 *   let-first="isFirst" // is first row?
 *   let-heads="heads" // access table heads
 *   let-createHead="createHead" // is `Add new record area head cell`?
 *   let-i="index" // row index
 *   let-last="isLast" // is last row?
 *   let-odd="isOdd" // is odd?
 *   let-row="row" // current row data
 * >
 *  <td>
 *    current row: {{row | json}}, rowIndex: {{i}},  isLast: {{last}}, isOdd: {{odd}} etc.
 *  </td>
 *  </ng-template>
 * </logo-table>
 * ```
 */
export class TableHead {
  /**
   * is used for set style class name
   */
  display = '';
  /**
   * is for thead visible text
   */
  className = '';
}
