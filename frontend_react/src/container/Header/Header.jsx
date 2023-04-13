import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsInstagram, BsGit } from "react-icons/bs";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        /> */}
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Jackcheal Dang</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">
              I'm a software developer seeking a Software Engineering position
              at an innovating company. Eager to expand, empower, and evolve
              companies striving to make a difference.
            </p>
          </div>
        </div>
        {/* <div className="app__header-social app__flex">
          <a href="https://linkedin.com/in/jackchealdang">
            <div className="app__header-social-item app_flex">
              <BsLinkedin />
              <p className="p-text">Test</p>
            </div>
          </a>
          <a href="https://github.com/jackchealdang">
            <div className="app__header-social-item app_flex">
              <BsGithub />
              <p className="p-text">Test</p>
            </div>
          </a>
        </div> */}
      </motion.div>

      {/* <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div> */}
    </div>
  );
};

// Wrap pages with Nav Bar, Copyright, Navigation Dots, and Social Media icons.
// Inner wrap for motion animations.
export default AppWrap(
  MotionWrap(Header, "app__header"),
  "home", // Anchor #name
  "app__whitebg" // Page BG color
);
