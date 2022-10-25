import React from "react";
import "../App.css"
import User from "../components/Avatar";
import Link from "../components/Link";
import Links from "../components/Social"
import Footer from "../components/Footer"
// import {User, Links, Link, Footer } from "../components";

const HomePage = () => {
  return (
    <div className="container">
      <div>
        <User />
      </div>
      <div>
        <Links/>
      </div>
      <div>
        <Link />
        <Link />
        <Link />
        <Link />
        <Link />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
