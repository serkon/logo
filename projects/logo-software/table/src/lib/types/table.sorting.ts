import { VariablePathResolver } from '../table.component';

/**
 * Sorting requirements
 */
export class TableSorting {
  /**
   * Column variable path string will be sort
   */
  column: string | VariablePathResolver;
  /**
   * Sorting types are DESC or ASC, if true it will be sort DESC
   */
  descending: boolean;
  /**
   * It disable sorting
   */
  status: boolean;
}
