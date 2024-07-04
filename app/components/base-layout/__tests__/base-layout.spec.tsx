import { render, screen } from "@testing-library/react-native";
import { BaseLayout } from "../base-layout";
import { Text } from "react-native";

describe("component: BaseLayout", () => {
  it("should render children", async () => {
    render(
      <BaseLayout>
        <Text testID="children-text">Children text</Text>
      </BaseLayout>,
    );

    expect(screen.getByTestId("children-text")).toBeOnTheScreen();
  });
});
