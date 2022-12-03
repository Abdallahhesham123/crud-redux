import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@react-icons/all-files/bs"

import App from "./App";
import { ThemeContextProvider } from "./GlobalComponants/ThemeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <ThemeContextProvider>

    <App />

    </ThemeContextProvider>
  
 
);
