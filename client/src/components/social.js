import React from "react";

import { CiMail, CiYoutube, CiInstagram, CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";

const Links = () => {
  return (
    <>
      <ul className="social-container flex flex-direction-row align-items justify-content">
        <li className="icon">
          <CiYoutube size = {30} color="blue"/>
        </li>
        <li className="icon">
          <CiInstagram size={30}/>
        </li>
        <li className="icon">
          <CiFacebook size={30}/>
        </li>
        <li className="icon">
          <CiTwitter size={30}/>
        </li>
        <li className="icon">
          <CiLinkedin size={30}/>
        </li>
        <li className="icon">
          <CiMail size={30}/>
        </li>
      </ul>
    </>
  );
};

export default Links;
