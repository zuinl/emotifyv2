import { render, screen } from "@testing-library/react-native";
import { Tab } from "../tab";
import { TabProps } from "../../../types/components/tab-menu";
import { getUserEvent } from "../../../tests/user-event";

describe("component: Tab", () => {
  const baseProps: TabProps = {
    text: "Agora",
    active: false,
    onPress: jest.fn(),
  };

  it("should render tab text", () => {
    render(<Tab {...baseProps} />);

    expect(screen.getByTestId("tab-text")).toHaveTextContent(baseProps.text);
  });

  it("should NOT render tab active indicator", () => {
    render(<Tab {...baseProps} />);

    expect(screen.queryByTestId("tab-active-indicator")).not.toBeOnTheScreen();
  });

  it("should render tab active indicator", () => {
    render(<Tab {...baseProps} active />);

    expect(screen.getByTestId("tab-active-indicator")).toBeOnTheScreen();
  });
});
