import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { MyPage } from "./pages/MyPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};
