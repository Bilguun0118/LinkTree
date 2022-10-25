import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { UserContext } from "./context";


import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import UserPage from "./pages/UserPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={ <HomePage/> }/>
        <Route path="/login" element ={ <LogInPage/> }/>
        <Route path="/:userName" element ={ <UserPage/> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
