import { render, screen } from "@testing-library/react-native";
import { Button } from "../button";

describe("component: Button", () => {
  it("should render button text", () => {
    render(
      <Button
        variant="primary"
        fill="contained"
        disabled={false}
        text="Button text test"
        customStyle={{}}
        customTextStyle={{}}
        onPress={jest.fn()}
        onPressIn={jest.fn()}
        onPressOut={jest.fn()}
        onLongPress={jest.fn()}
      />,
    );

    expect(screen.getByText("Button text test")).toBeOnTheScreen();
  });
});
