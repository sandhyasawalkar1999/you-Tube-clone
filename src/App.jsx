import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import Playingvideo from "./components/Playingvideo";
import { Route, Routes } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { useAuth } from "./context/AuthProvider";
// import Loading from "./components/Loading";
import Loading from "./Loader/Loading";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { ToastContainer } from "react-toastify";


const App = () => {

  const { loading } = useAuth();

  return (
    <div>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<Playingvideo />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </div >
  );
};

export default App;
