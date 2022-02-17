import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorites-context";
const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>,
  rootElement
);
