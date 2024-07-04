import { render, screen } from "@testing-library/react-native";
import { Button } from "../button";
import { getUserEvent } from "@tests/user-event";

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

  it("should invoke press callback", async () => {
    const onPressFn = jest.fn();
    const onPressInFn = jest.fn();
    const onPressOutFn = jest.fn();
    render(
      <Button
        variant="primary"
        fill="contained"
        disabled={false}
        text="Button text test"
        customStyle={{}}
        customTextStyle={{}}
        onPress={onPressFn}
        onPressIn={onPressInFn}
        onPressOut={onPressOutFn}
        onLongPress={jest.fn()}
      />,
    );

    const user = getUserEvent();

    await user.press(screen.getByTestId("button-pressable"));

    expect(onPressInFn).toHaveBeenCalledTimes(1);
    expect(onPressFn).toHaveBeenCalledTimes(1);
    expect(onPressOutFn).toHaveBeenCalledTimes(1);
  });

  it("should invoke long press callback", async () => {
    const onLongPressFn = jest.fn();
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
        onLongPress={onLongPressFn}
      />,
    );

    const user = getUserEvent();

    await user.longPress(screen.getByTestId("button-pressable"));

    expect(onLongPressFn).toHaveBeenCalledTimes(1);
  });
});
