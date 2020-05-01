import { FilterType } from './filter.type';

/**
 * When search anything on the table filter are this object will be created on background.
 * It used for definition of the filter path kind and its value. There are 3 type path resolver.
 *
 * - VariablePathResolver
 * - VariableFunctionResolver
 * - String
 */
export interface TableFilter<T> {
  /**
   *  Searched filter type
   */
  filterType: FilterType;
  /**
   * Variable path will be resolved
   */
  path: T;
  /**
   * User filter input value
   */
  value: string;
}
