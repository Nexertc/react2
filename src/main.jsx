import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/router";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrolToTop";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
   <Router />
  </BrowserRouter>
);