import React from "react";
import { owndevice } from "../../../images/images";
import { Container, Title, Text } from "../../Commont.styled";
import styles from "./OwnDevice.module.css";

const OwnDevice = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.ownDevice}>
          <div className={styles.imageContaner}>
            <img src={owndevice} alt="#" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <Title className={styles.title}>
              Everyone on their own device.
            </Title>
            <Text className={styles.text}>
              <span className={styles.eventUp}>EventUp</span> is designed to be
              inclusive, by being able to use your own device to help
              hybrid-conference teams create, collaborate and celebrate
              together.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OwnDevice;
