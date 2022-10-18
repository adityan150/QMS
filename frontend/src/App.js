import "./App.scss";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import lightTheme from "./Themes/LightTheme";
import darkTheme from "./Themes/DarkTheme";
import Switch from "@mui/material/Switch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./Pages/All/All";
import Query from "./Pages/Query/Query";
import Activity from "./Pages/Activity/Activity";
import Topics from "./Pages/Topics/Topics";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Home from "./Pages/Home/Home";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="app">
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="all" element={<All />} />
              <Route path="query" element={<Query />} />
              <Route path="activity" element={<Activity />} />
              <Route path="topics" element={<Topics />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Switch
          className="switch"
          checked={dark}
          onChange={() => setDark(!dark)}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
