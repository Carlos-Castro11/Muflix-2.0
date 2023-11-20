import React from "react";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import AdminEdit from "./AdminEdit";
import AdminDelete from "./AdminDelete";
import NotFound from "../NotFound";
import Admin from "./Admin";

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" end element={<Admin />} />
        <Route path="edit/:id" element={<AdminEdit />} />
        <Route path="delete/:id" element={<AdminDelete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Login;
