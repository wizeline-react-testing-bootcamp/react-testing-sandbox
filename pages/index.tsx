import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../store";
import * as theme from "../components/theme";
import Home from "../components/Home";

class App extends Component {
  static async getInitialProps({ query }) {
    return { pageParams: query };
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Home pageParams={this.props.pageParams} />
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
