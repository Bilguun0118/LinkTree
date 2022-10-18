import React from "react";
import User from "../components/user";
import Social from "../components/social";
import Link from "../components/link";

const HomePage = () => {
  return (
    <div>
      <div>
        <User />
      </div>
      <div>
        <Social/>
      </div>
      <div>
        <Link />
        <Link />
        <Link />
        <Link />
        <Link />
      </div>
    </div>
  );
};

export default HomePage;
