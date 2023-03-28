import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { SubText } from "../../../Commont.styled";
import { ukFlag, usFlag } from "../../../../images/images";
import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
  const [dropDown, setDropDown] = useState(false);
  const [language, setLanguage] = useState({
    icon: usFlag,
    country: "English (US)",
  });

  const socialMedia = [
    { icon: <FaTwitter className={styles.socialIcon} />, to: "#" },
    { icon: <FaFacebookF className={styles.socialIcon} />, to: "#" },
    { icon: <FaLinkedinIn className={styles.socialIcon} />, to: "#" },
  ];
  return (
    <div className={styles.footerBottom}>
      <SubText color="#57585D">© 2022 EventUp, Inc.</SubText>
      <div className={styles.items}>
        <a href="#/">
          <SubText color="#57585D">Privacy Policy</SubText>
        </a>{" "}
        <a href="#/">
          <SubText color="#57585D">Terms of Service</SubText>
        </a>{" "}
        <a href="#/">
          <SubText color="#57585D">Cookie Settings</SubText>
        </a>
      </div>
      <div className={styles.socialMediaAndLanugage}>
        <div
          className={styles.dropdown}
          onClick={() => setDropDown((prev) => !prev)}
        >
          <p className={styles.dropDownItem}>
            <img src={language.icon} alt="#" className={styles.flag} />{" "}
            {language.country}
          </p>
          {dropDown ? (
            <BiChevronUp className={styles.arrow} />
          ) : (
            <BiChevronDown className={styles.arrow} />
          )}
          {dropDown && (
            <div className={styles.dropDownItems}>
              <p
                className={styles.dropDownItem}
                onClick={() => {
                  setLanguage({ icon: ukFlag, country: "English (UK)" });
                  setDropDown(() => (prev) => !prev);
                }}
              >
                <img src={ukFlag} alt="#" className={styles.flag} />
                English (UK)
              </p>{" "}
              <p
                className={styles.dropDownItem}
                onClick={() => {
                  setLanguage({ icon: usFlag, country: "English (US)" });
                  setDropDown(() => (prev) => !prev);
                }}
              >
                <img src={usFlag} alt="#" className={styles.flag} />
                English (US)
              </p>
            </div>
          )}
        </div>
        <div className={styles.socialMedia}>
          {socialMedia.map((el, i) => (
            <a href={el.to} target="_blank" rel="noreferrer" key={i}>
              {el.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
