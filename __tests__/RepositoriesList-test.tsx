import { render } from "@testing-library/react-native";
import { RepositoriesList } from "../components/repositories-list/RepositoriesList";
import { useQuery } from "@tanstack/react-query";
import { Respository } from "../api/models";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

const mockData: Respository[] = [
  {
    id: 1,
    name: "repo1",
    description: "Repository 1",
    stargazers_count: 10,
    full_name: "testuser/repo1",
    stargazers_url: "https://api.github.com/repos/testuser/repo1/stargazers",
    topics: ["topic1", "topic2"],
    url: "https://api.github.com/repos/testuser/repo1",
    watchers: 5,
    watchers_count: 5,
  },
];

describe("RepositoriesList", () => {
  test("renders loading indicator when data is loading", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    });
    const { getByTestId } = render(<RepositoriesList username="testuser" />);
    const loadingIcon = getByTestId("loading-icon");
    expect(loadingIcon).toBeTruthy();
  });

  test("renders error message when there is an error", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    });
    const { getByTestId } = render(<RepositoriesList username="testuser" />);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage).toBeTruthy();
  });

  test("renders repositories list when data is available", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });
    const { getByTestId } = render(<RepositoriesList username="testuser" />);
    const repoItems = getByTestId("repository-1");
    expect(repoItems).toBeTruthy();
  });
});
