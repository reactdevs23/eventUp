import React from "react";
import {
  slack,
  netflix,
  google,
  airbnb,
  unicef,
  adobe,
  microsoft,
  shipbnb,
} from "../../../images/images";
import { Container } from "../../Commont.styled";
import styles from "./Partners.module.css";

const Partners = () => {
  const ourPartners = [
    { logo: slack, to: "#" },
    { logo: netflix, to: "#" },
    { logo: google, to: "#" },
    { logo: airbnb, to: "#" },
    { logo: unicef, to: "#" },
    { logo: adobe, to: "#" },
    { logo: microsoft, to: "#" },
    { logo: shipbnb, to: "#" },
  ];
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="1280px">
        <div className={styles.partners}>
          {ourPartners.map((el, i) => (
            <a href={el.to} rel="noreferrer" target="_blank" key={i}>
              <img src={el.logo} alt="#" className={styles.partnerLogo} />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
