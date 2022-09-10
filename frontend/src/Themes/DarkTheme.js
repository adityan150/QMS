import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1a237e",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#212121",
      paper: "#d5d5d5",
    },
  },
});

export default darkTheme;
