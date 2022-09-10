import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import lightTheme from "./Themes/LightTheme";
import darkTheme from "./Themes/DarkTheme";
import Switch from "@mui/material/Switch";
import SignIn from "./Pages/SignIn";
import "./App.css";

function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Switch checked={dark} onChange={() => setDark(!dark)} />
    </ThemeProvider>
  );
}

export default App;
