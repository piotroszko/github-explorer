import React from "react";
import { render } from "@testing-library/react-native";
import { ResultsFor } from "../components/results-for/ResultsFor";
import { TestWrappers } from "../test-helpers/test-wrappers";

describe("ResultsFor", () => {
  it("should render correctly when username is provided", () => {
    const { getByText } = render(
      <TestWrappers>
        <ResultsFor username="john" />
      </TestWrappers>
    );
    const labelLargeText = getByText(/Showing users for/i);
    const usernameText = getByText(/"john"/i);

    expect(labelLargeText).toBeTruthy();
    expect(usernameText).toBeTruthy();
  });

  it("should render null when username is not provided", () => {
    const { root } = render(<ResultsFor />);
    expect(root).toBeUndefined();
  });
});
