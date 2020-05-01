import { VariableFunctionResolver, VariablePathResolver } from '../table.component';
import { FilterType } from './filter.type';

/**
 * TableColumn class define table TD data properties where data will receive for each cell.
 * Also it set column visibility. Header Title and more. Please read more below.
 *
 * __Usage Example__
 *
 * ```typescript
 * [
 * {display: 'ID', variablePath: 'id', filterType: 'text', hidden: false, editable: true},
 * {
 *   display: 'Secure ID',
 *   variablePath: (row: any) => 'id',
 *   filterType: 'text',
 *   sortable: true,
 *   sortingKey: 'id',
 *   editable: false,
 *  },
 * {
 *   display: 'path sample',
 *   variablePath: (row: any) => row.percentage > 9 ? 'percentage' : 'because',
 *   filterType: 'text',
 *   sortable: true,
 *   sortingKey: 'because',
 *   expand: true,
 *  },
 * {display: 'zone.name', variablePath: 'zone.name', filterType: 'text', sortable: true},
 * {
 *   display: 'percentage number',
 *   variablePath: 'percentage',
 *   filterType: 'currency',
 *   format: '',
 *   sortable: true,
 *  },
 * {
 *   display: 'percentage %',
 *   variablePath: 'percentage',
 *   filterType: 'percent',
 *   format: '1.1-3:"it"',
 *   sortable: true,
 *  },
 * {display: 'date', variablePath: 'hour', filterType: 'date', format: 'yyyy.MM.dd HH:mm', sortable: true},
 * {display: 'surname', variablePath: 'surname', filterType: 'custom'},
 * {display: 'because', variablePath: 'because', filterType: 'number', format: '4.2-3', sortable: true},
 * {
 *   display: 'Func Samp 1',
 *   variableFunction: (row: any) => row?.percentage >= 34 ? row?.zone?.name + ' <b>text</b>' : row?.id,
 *   className: 'total',
 *   classFunction: (row) => (row?.percentage >= 20 ? 'bigger' : 'smaller'),
 *   sortable: true,
 *   sortingKey: 'zone.name',
 *  },
 * {
 *   display: 'Func Samp 2',
 *   variableFunction: (row: any) => row?.percentage > 9 ? row?.percentage + ' <i>added</i>' : row?.because ? row.because : 'yok ' + '<b>not</b>',
 *   className: 'total',
 *   sortable: true,
 *   sortingKey: 'zone.name',
 *  },
 * ]
 * ```
 */
export class TableColumn {
  /**
   * Visible text of the table column th of thead
   */
  display = '';
  /**
   * The variable that specifies the HTTP response path of the data to be displayed.
   * It can also be functional, but it must return a string of the data path.
   * For example : `variablePath: 'user.name'` can be the directly given string or the method which returns a string with conditionally
   * `variablePath: (row) => row.id < 3 ? 'table.data.zone.name' : 'table.data.zone.'`
   */
  variablePath?: VariablePathResolver | string;
  /**
   * This method accepts row information
   */
  variableFunction?: VariableFunctionResolver;
  /**
   * Format of the Pipe types for filtering. FilterType will be HTMLInput element type `<input type="filterType"` />
   * So which type want to use while filtering set the it can be set from here.
   */
  filterType?: FilterType;
  /**
   * Angular formats, for example: `format: '1.1-3:"en-EN"'`
   */
  format?: string = null;
  /**
   * if it is true filter of the thead will be disabled
   */
  filterDisable ? = false;
  /**
   * Hides the column
   */
  hidden ? = false;
  /**
   * It gives class name to TD cell
   */
  className?: string;
  /**
   * Method used for return class name. This method accept row parameter and return string with conditionally
   */
  classFunction?: VariablePathResolver;
  /**
   * If true column will be sortable, default value is false
   */
  sortable ? = false;
  /**
   * It defines sorting property when clicked to table TH. You can change sorting key to another property
   */
  sortingKey?: string;
  /**
   * When set true the table cell will be expandable and there will be expand button, default value is false
   */
  expand?: boolean = false;
  /**
   * When it is true cell will be editable, default is true
   */
  editable? = true;
}
