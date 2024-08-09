import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Respository } from "./models";
import {
  ConfigContextType,
  useConfig,
} from "../components/config/ConfigProvider";
import { API_ENDPOINTS } from "./endpoints";

const getRepositories = async (userName: string, config: ConfigContextType) => {
  const { github_url } = config || {};

  const response = await axios.get(
    github_url + API_ENDPOINTS.userRepositories(userName)
  );
  return response?.data;
};

/**
 *  React query hook to get repositories for a user
 * @param userName Repository owner name
 */
export const useRepositoriesQuery = (userName: string) => {
  const config = useConfig();
  return useQuery<Respository[], Error>({
    queryKey: ["repositories", [userName, config]],
    queryFn: () => getRepositories(userName, config),
  });
};
