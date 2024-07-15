import { renderRouter } from "expo-router/testing-library";
import { screen } from "@testing-library/react-native";
import Home from "..";
import { renderComponentInContext } from "../tests/base-layout.context.mock";
import { getUserEvent } from "../tests/user-event";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  accessTokenIdentifier,
  expiresTokenIdentifier,
} from "../utils/constants";

describe("page: Index", () => {
  it("should render home page", () => {
    renderComponentInContext({
      component: <Home />,
    });

    expect(screen.getByText("Comece sua história musical")).toBeOnTheScreen();
  });

  //TODO: melhorar o teste, verificando se a rota foi chamada
  it("should redirect to home page if access token is set", async () => {
    await AsyncStorage.setItem(accessTokenIdentifier, "some_token");
    await AsyncStorage.setItem(expiresTokenIdentifier, "30");

    renderRouter({
      index: () => <Home />,
      "/pages/connect": jest.fn(() => <></>),
    });

    renderComponentInContext({
      component: <Home />,
    });

    expect(screen.getByText("Comece sua história musical")).toBeOnTheScreen();
  });

  //TODO: melhorar o teste, verificando se a rota foi chamada
  it("should render 'Dê o play' button", async () => {
    renderRouter({
      index: () => <Home />,
      "/pages/connect": jest.fn(() => <></>),
    });

    renderComponentInContext({
      component: <Home />,
    });

    const button = screen.getByText("Dê o play");

    const user = getUserEvent();
    await user.press(button);

    expect(button).toBeOnTheScreen();
  });
});
