import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Sidebar from "../Sidebar";
import store from "../../store";
import * as theme from "../../components/theme";

describe("Sidebar React Testing Library Tests", () => {
  test("it renders correctly and displays children", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Sidebar />
        </ThemeProvider>
      </Provider>
    );
    // screen.debug();
  });
});
