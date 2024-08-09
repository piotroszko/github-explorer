import { render, userEvent } from "@testing-library/react-native";
import { SearchInput } from "../components/search-input/SearchInput";
import { TestWrappers } from "../test-helpers/test-wrappers";

describe("SearchInput", () => {
  it("should call onChange with the entered text", async () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <TestWrappers>
        <SearchInput onChange={onChangeMock} />
      </TestWrappers>
    );
    const input = getByTestId("search-input");

    await userEvent.type(input, "example");

    expect(onChangeMock).toHaveBeenCalledWith("example");
  });

  it("should clear the input when clear button is pressed", async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <TestWrappers>
        <SearchInput />
      </TestWrappers>
    );
    const input = getByPlaceholderText("Enter username");
    await userEvent.type(input, "example");

    const clearButton = getByTestId("clear-button");
    await userEvent.press(clearButton);

    expect(input.props.value).toBe("");
  });
});
