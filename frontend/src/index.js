import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import TourContextProvider from "./context/ToursContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<TourContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</TourContextProvider>
);
