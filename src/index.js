import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./context/appcontext";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </AppContext>
  </React.StrictMode>
);
