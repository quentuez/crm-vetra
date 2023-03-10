import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

// Pages
import Main from "./pages/Main/Main";

// Styles
import "./assets/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex bg-blue-50">
        <Navigation />

        <div className="w-full">
          <Header />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
