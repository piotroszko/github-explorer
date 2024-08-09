import { render } from "@testing-library/react-native";
import { UsersList } from "../components/users-list/UsersList";
import { User } from "../api/models";

const mockUsers: User[] = [
  {
    avatar_url: "https://example.com/avatar1.png",
    gravatar_id: "gravatar1",
    id: 1,
    login: "user1",
    repos_url: "https://example.com/repos1",
    score: 1,
    starred_url: "https://example.com/starred1",
    type: "user",
    url: "https://example.com/user1",
  },
  {
    avatar_url: "https://example.com/avatar2.png",
    gravatar_id: "gravatar2",
    id: 2,
    login: "user2",
    repos_url: "https://example.com/repos2",
    score: 2,
    starred_url: "https://example.com/starred2",
    type: "user",
    url: "https://example.com/user2",
  },
];

describe("UsersList", () => {
  test("renders null when users prop is nil", () => {
    const { queryByRole } = render(<UsersList />);
    expect(queryByRole("list")).toBeNull();
  });

  test("renders null when users prop is an empty array", () => {
    const { queryByRole } = render(<UsersList users={[]} />);
    expect(queryByRole("list")).toBeNull();
  });

  test("renders a list of users when users prop is provided", () => {
    const { getByTestId, getAllByTestId } = render(
      <UsersList users={mockUsers} />
    );
    expect(getByTestId("list")).toBeTruthy();
    expect(
      getAllByTestId("user-", {
        exact: false,
      })
    ).toBeTruthy();
  });
});
