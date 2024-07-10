import { screen } from "@testing-library/react-native";
import Home from ".";
import { renderComponentInContext } from "./tests/base-layout.context.mock";

describe("page: Index", () => {
  it("should render home page", () => {
    renderComponentInContext({
      component: <Home />,
    });

    expect(screen.getByText("Comece sua história musical")).toBeOnTheScreen();
  });
});
