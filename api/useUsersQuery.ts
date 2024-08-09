import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pagination, User } from "./models";
import { getPaginatedResponse } from "../utils";
import {
  ConfigContextType,
  useConfig,
} from "../components/config/ConfigProvider";
import { API_ENDPOINTS } from "./endpoints";

const getUsers = async (
  query: string,
  page: number,
  config: ConfigContextType
) => {
  const { github_url, per_page } = config || {};

  const response = await axios.get(github_url + API_ENDPOINTS.seachUsers, {
    params: {
      per_page,
      q: query,
      page,
    },
  });

  return getPaginatedResponse<User[]>(
    response?.data?.items || [],
    response?.data?.total_count || 0,
    page || 0
  );
};

/**
 * React query hook to get users base on name and page
 * @param query Search string for users
 * @param page Page number
 */
export const useGetUsersQuery = (query?: string, page = 0) => {
  const config = useConfig();
  return useQuery<Pagination<User[]>, Error>({
    queryKey: ["users", [query, page, config]],
    queryFn: () => getUsers(query || "", page, config),
    enabled: !!query,
  });
};
