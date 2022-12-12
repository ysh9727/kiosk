import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main/Main";
import Menu from "./routes/Menu/Menu";
import WaitingTurn from "./routes/WaitingTurn/WaitingTurn";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Menu />} />
        <Route path="/takeout" element={<Menu />} />
        <Route path="/waitingTurn" element={<WaitingTurn />} />
      </Routes>
    </HashRouter>
  );
}
