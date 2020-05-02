/**
 * Paging interface describe minimum configuration for PagingModule.
 */
export interface TablePaging {
  /**
   * status changes paging visibility. If false paging will not be appear.
   */
  status?: boolean;
  /**
   * pageSize is define record per page
   */
  pageSize: number;
  /**
   * current page number
   */
  pageNumber: number;
  /**
   * Total records count
   */
  totalCount: number;
  /**
   * Total page count
   */
  totalPages: number;
}
