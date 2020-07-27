import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: ["Open Sans", "Roboto", "Helvetica"].join(","),
      letterSpacing: "1px",
    },
  },
  palette: {
    primary: {
      main: "#1EB980",
      dark: "#045D56",
    },

    background: {
      default: "#33333D",
      paper: "#1E1E1E",
    },

    type: "dark",
  },
});
