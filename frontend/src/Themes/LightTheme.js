import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "rgba(255, 96, 96, 1)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "rgba(255, 208, 208, 1)",
    },
    background: {
      default: "rgba(255, 255, 255, 1)",
    },
  },
});

export default lightTheme;
