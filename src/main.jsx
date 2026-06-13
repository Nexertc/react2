import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/router";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrolToTop";

// font-family
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
   <Router />
  </BrowserRouter>
);