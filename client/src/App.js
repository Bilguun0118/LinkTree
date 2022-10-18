import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

import HomePage from "./pages/homePage";
import Links from "./components/social";

function App() {

  return (
    <div className="App text-align">
      <HomePage />
    </div>
  );
}

export default App;
