import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { MyPage } from "./pages/MyPage";
import { PrivateRoute } from "./routes/PrivateRoute";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/mypage" element={<MyPage />} />
      </Route>
    </Routes>
  );
};
