import React from "react";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import WritePage from "./pages/WritePage.js";
import PostPage from "./pages/PostPage.js";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        {/* 
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route> */}

        <Route path="/:username@" element={<PostListPage />} />
        <Route path="/:username@/:postId@" element={<PostPage />} />
      </Routes>
    </>
  );
};
export default App;
