import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pagination, User } from "./models";
import { getPaginatedResponse } from "../utils";
import {
  ConfigContextType,
  useConfig,
} from "../components/config/ConfigProvider";

const getUsers = async (
  query: string,
  page: number,
  config: ConfigContextType
) => {
  const { github_url, per_page } = config || {};

  const response = await axios.get(github_url + "search/users", {
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

export const useGetUsers = (query: string, page: number) => {
  const config = useConfig();
  useQuery<Pagination<User[]>, Error>({
    queryKey: ["users", [query, page, config]],
    queryFn: () => getUsers(query, page, config),
  });
};
