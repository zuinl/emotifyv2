import { render, screen } from "@testing-library/react-native";
import { Header } from "../header";
import { getUserEvent } from "@tests/user-event";

describe("component: Header", () => {
  it("should invoke correct callbacks", async () => {
    const onOptionsPressFn = jest.fn();
    const onSearchPressFn = jest.fn();

    render(
      <Header
        onOptionsPress={onOptionsPressFn}
        onSearchPress={onSearchPressFn}
      />,
    );
    const optionsBtn = screen.getByTestId("options-button");
    const searchBtn = screen.getByTestId("search-button");

    const user = getUserEvent();

    await user.press(optionsBtn);
    expect(onOptionsPressFn).toHaveBeenCalledTimes(1);
    await user.press(searchBtn);
    expect(onSearchPressFn).toHaveBeenCalledTimes(1);
  });
});
