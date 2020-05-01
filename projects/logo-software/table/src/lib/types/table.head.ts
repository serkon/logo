/**
 * This input adds custom extra thead to and tbody columns to table.
 * If custom coded html need to be inserted between table columns, this is the solution.
 * Add some HTML to between app-table tag using
 *
 * __Usage Example__
 *
 * <sub>html</sub>
 * ```html
 * <template let-i="index" let-row="row" let-last="isLast" let-odd="isOdd">
 * ```
 *
 * <sub>typescript</sub>
 * ```typescript
 *    this.unassigned.theads: [{display: 'Onay', className:'some-class-name'}]
 *  ```
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
 *  #unassignedTable
 * >
 * <ng-template
 *   #columns
 *   let-actions="actions"
 *   let-columns="columns"
 *   let-filter="filter"
 *   let-first="isFirst"
 *   let-heads="heads"
 *   let-createHead="createHead"
 *   let-i="index"
 *   let-last="isLast"
 *   let-odd="isOdd"
 *   let-row="row"
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
