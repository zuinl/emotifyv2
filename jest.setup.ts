import "@testing-library/react-native/extend-expect";
import { server } from "./app/tests/node";

jest.useFakeTimers();

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

afterAll(() => server.close());
