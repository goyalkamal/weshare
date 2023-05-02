import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// Pages
import Home from "./pages/Home";
import ScrapPricing from "./pages/ScrapPricing";
import Sell from "./components/Sell";
import Buy from "./components/Buy";
import Donate from "./components/Donate";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#27ba32",
      light: "#4caf50",
      dark: "#27ba32",
      contrastText: "#fff",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="scrap-pricing" element={<ScrapPricing />} />
              <Route path="addproduct" element={<Sell />} />
              <Route path="buy" element={<Buy />} />
              <Route path="donate" element={<Donate />} />
            </Route>
          </Routes>
          {/* <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes> */}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
