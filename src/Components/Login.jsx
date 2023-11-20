import React from "react";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import NotFound from "./NotFound";
import AdminRoutes from "./Admin/AdminRoutes";

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<RegisterForm />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Login;
