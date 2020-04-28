/**
 * Table filter interface must be the this properties
 */
export interface TableFilter<T> {
  filterType: 'custom' | 'text' | 'range' | 'percent' | 'currency' | 'decimal' | 'number' | 'datetime' | 'date' | 'time' | null;
  path: T;
  value: string;
}
