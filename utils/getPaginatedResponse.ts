import { Pagination } from "../api/models";

export const getPaginatedResponse = <T extends any[]>(
  data: T,
  total_count: number,
  page: number
): Pagination<T> => {
  return {
    data,
    total_count,
    page,
    per_page: data?.length || 0,
    is_last_page: total_count <= page + 1 * data?.length,
  };
};
