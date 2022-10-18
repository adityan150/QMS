import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgba(255, 96, 96, 1)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default darkTheme;
