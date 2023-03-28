import React from "react";
import { ceo } from "../../../images/images";
import { Container, SubText, Title } from "../../Commont.styled";
import styles from "./CeoQoute.module.css";

const CeoQoute = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.ceoQoute}>
          <div className={styles.ceo}>
            <img src={ceo} alt="#" className={styles.ceoImage} />
            <div className={styles.nameAndPosition}>
              <p className={styles.name}>Sunaryo Situmorang</p>
              <SubText color="#57585D" className={styles.text}>
                Founder & CEO EventUp
              </SubText>
            </div>
          </div>
          <Title color="#0F1017" className={styles.title}>
            <span className={styles.our}> Our</span> goal is to build software
            that enables users who need it to launch their products in this
            pandemic and all-digital <span className={styles.time}>time</span>
          </Title>
        </div>
      </Container>
    </div>
  );
};

export default CeoQoute;
