import { createContext, PropsWithChildren, useContext } from "react";

export interface ConfigContextType {
  github_url?: string;
  per_page?: number;
}

export const ConfigContext = createContext<ConfigContextType>({});

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ConfigContext.Provider
      value={{
        github_url: "https://api.github.com/",
        per_page: 5,
      }}>
      {children}
    </ConfigContext.Provider>
  );
};
