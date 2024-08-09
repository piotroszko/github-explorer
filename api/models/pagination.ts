export interface Pagination<T = unknown[]> {
  total_count: number;
  page: number;
  per_page: number;
  is_last_page: boolean;
  data: T;
}
