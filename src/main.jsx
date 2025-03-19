import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/fiverr">
    <App />
  </BrowserRouter>
);