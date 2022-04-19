import {
  getAllByTestId,
  queryAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as theme from "../../../components/theme";
import SidebarMenu from ".";
import store from "../../../store";

// Try to add
describe("SidebarMenu React Testing Library Tests", () => {
  test("it renders correctly", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SidebarMenu />
        </ThemeProvider>
      </Provider>
    );
    // screen.debug();
    const firstMenuItem = screen.getByText("Hot");
    // console.log(firstMenuItem);
    expect(firstMenuItem).toBeInTheDocument();
    expect(screen.getAllByTestId(/sidebarMenu_/i)).toHaveLength(6);
  });
});
