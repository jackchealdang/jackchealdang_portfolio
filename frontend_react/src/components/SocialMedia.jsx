import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://linkedin/in/jackchealdang">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/jackchealdang">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
