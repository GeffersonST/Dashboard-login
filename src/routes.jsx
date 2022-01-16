import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
