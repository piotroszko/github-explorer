export const API_ENDPOINTS = {
  seachUsers: "search/users",
  userRepositories: (userName: string) => `users/${userName}/repos`,
};
