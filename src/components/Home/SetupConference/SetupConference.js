import React from "react";

import { Container, SubText, Title } from "../../Commont.styled";
import styles from "./SetupConference.module.css";

const SetupConference = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.setupConference}>
            <div className={styles.textContainer}>
              <Title color="#FFFFFF">
                Ready to setup your next conference?
              </Title>
              <SubText color="#CFCFD1">
                Build opportunities for future opportunities for products,
                startups.
              </SubText>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={[styles.button, styles.activeButton].join(" ")}
              >
                Create Conference
              </button>
              <button className={styles.button}>watch story</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SetupConference;
