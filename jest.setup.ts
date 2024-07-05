import "@testing-library/react-native/extend-expect";

jest.useFakeTimers();

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
