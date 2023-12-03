import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, UseForm } from "../pages";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-form" element={<UseForm />} />
    </Routes>
  );
};
