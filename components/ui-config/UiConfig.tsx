import { createContext, PropsWithChildren, useContext } from "react";
import { DEFAULT_UI_CONFIG } from "./default-ui-config";

export interface UiConfigContextType {
  placholders?: {
    search?: string;
  };
  transitions?: {
    resultsForUser?: string;
    repositoriesNotFound?: string;
    searchButton?: string;
    errorWhileFetching?: string;
  };
}

const UiConfigContext = createContext<UiConfigContextType>({});

export const useUiConfig = () => useContext(UiConfigContext);

export const UiConfig = ({ children }: PropsWithChildren<{}>) => {
  return (
    <UiConfigContext.Provider value={DEFAULT_UI_CONFIG}>
      {children}
    </UiConfigContext.Provider>
  );
};
