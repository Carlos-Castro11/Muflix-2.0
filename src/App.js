import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserStorage } from "./UserContext";

// COMPONENTS
import Home from "./Components/Home";
import Login from "./Components/Login";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Movies from "./Components/Movies/Movies";
import NotFound from "./Components/NotFound";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login/*" element={<Login />} />
            <Route path="movies" element={<Movies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
