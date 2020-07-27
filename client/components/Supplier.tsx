import React from "react";
import {
  MuiThemeProvider,
  CssBaseline,
  StylesProvider,
} from "@material-ui/core";
import muiTheme from "../utils/muiTheme";

const Supplier = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Supplier;
