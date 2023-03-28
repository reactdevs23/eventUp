import React from "react";
import { virtualConference } from "../../../images/images";
import { Container, Title, Text } from "../../Commont.styled";
import styles from "./VirtualConferencing.module.css";

const VritualConferencing = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.virtualConference}>
          <div className={styles.textContainer}>
            <Title className={styles.title}>
              Powerful virtual conferencing platform solution
            </Title>
            <Text className={styles.text}>
              Dedicated spaces that make it easy to come together.
            </Text>
          </div>
          <div className={styles.imageContaner}>
            <img src={virtualConference} alt="#" className={styles.image} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VritualConferencing;
