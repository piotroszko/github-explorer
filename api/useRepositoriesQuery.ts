import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Respository } from "./models";
import {
  ConfigContextType,
  useConfig,
} from "../components/config/ConfigProvider";

const getRepositories = async (userName: string, config: ConfigContextType) => {
  const { github_url } = config || {};

  const response = await axios.get(github_url + `users/${userName}/repos`);
  return response?.data;
};

export const useRepositoriesQuery = (userName: string) => {
  const config = useConfig();
  return useQuery<Respository[], Error>({
    queryKey: ["repositories", [userName, config]],
    queryFn: () => getRepositories(userName, config),
  });
};
