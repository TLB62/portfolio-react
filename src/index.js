import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apropos from "./a-propos";
import Projets from "./projets";
import Experiences from "./experiences";
import { Maintenance } from "./maintenance";
import "../src/styles/global.css";
import Accueil from "./accueil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* mise en place du router */}
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
