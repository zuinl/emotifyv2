import { Alert } from "react-native";
import { showAlert } from "../show-alert";

describe("util: showAlert", () => {
  const alertMock = jest.spyOn(Alert, "alert");

  it("should invoke RN alert", async () => {
    showAlert({ title: "Teste", message: "Teste de mensagem" });

    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("should invoke RN alert - with custom buttons", async () => {
    showAlert({
      title: "Teste",
      message: "Teste de mensagem",
      showCancelButton: true,
      showConfirmButton: true,
    });

    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
