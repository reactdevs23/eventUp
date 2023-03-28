import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { heroImg } from "../../../images/images";
import { Container, Text } from "../../Commont.styled";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="1280px">
        <div className={styles.heroSection}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              Reliable, <span className={styles.secure}>secure</span> conference
              to get the best events
            </h2>
            <Text color="#CFCFD1" className={styles.text}>
              Hold incredible events, share knowledge, build and grow your
              product , create opportunity
            </Text>
            <div className={styles.buttonContainer}>
              <button
                className={[styles.button, styles.activeButton].join(" ")}
              >
                Create Conference
              </button>
              <button className={styles.button}>
                Watch story
                <HiArrowNarrowRight className={styles.arrow} />
              </button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={heroImg} alt="#" className={styles.image} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
