import React, { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneTooltip, setPhoneTooltip] = useState("Copy phone");
  const [emailTooltip, setEmailTooltip] = useState("Copy email");

  const myPhoneNumber = "+1 (682) 407-2325";
  const myEmail = "jackchealdang@gmail.com";

  const copyPhone = () => {
    navigator.clipboard.writeText(myPhoneNumber);
    setPhoneTooltip("Copied!");
    console.log(phoneTooltip);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setEmailTooltip("Copied!");
  };

  // Pull values from formData
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    // Pull values from event input
    const { name, value } = e.target;

    // Advanced React, need to learn more about this!
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // Form a contact object following Sanity's guidelines
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Connect with Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jackchealdang@gmail.com" className="p-text">
            {myEmail}
          </a>
          <button type="button" className="p-text" onClick={copyEmail}>
            <div
              data-tooltip-id="copyEmailHover"
              data-tooltip-content={emailTooltip}
            >
              <BsClipboard />
            </div>
          </button>
          <Tooltip id="copyEmailHover" />
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (682) 407-2325" className="p-text">
            {myPhoneNumber}
          </a>
          <button type="button" className="p-text" onClick={copyPhone}>
            <div data-tooltip-id="copyPhoneHover">
              <BsClipboard />
            </div>
          </button>
          <Tooltip id="copyPhoneHover" content={phoneTooltip} />
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Write a message to me!"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
