import { UiConfigContextType } from "./UiConfig";

export const DEFAULT_UI_CONFIG: UiConfigContextType = {
  placholders: {
    search: "Enter username",
  },
  transitions: {
    resultsForUser: "Showing users for",
    repositoriesNotFound: "No repositories found",
    searchButton: "Search",
    errorWhileFetching: "Error while fetching data",
  },
};
