import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { videocallsImage } from "../../../../images/images";
import { Container, SubText, Title } from "../../../Commont.styled";
import styles from "./VideoCalls.module.css";

const VideoCalls = () => {
  const facilities = [
    "Intergration with google meet",
    "Messages with participation",
    "Get data event analytics",
    "Advanced Q&A settings",
    "Protect events with a passcode",
    "Crowdsource questions",
  ];
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="1400px">
        <div className={styles.videoCalls}>
          <div className={styles.textContainer}>
            <SubText
              fontWeight="500"
              color="#9F9FA2"
              className={styles.subText}
            >
              <span className={styles.line}></span> ALL FEATURES
            </SubText>
            <Title color="#ffff" className={styles.title}>
              Video calls loved by extraordinary teams.
            </Title>
            <SubText color="#CFCFD1" className={styles.info}>
              Making hybrid‑conference inclusive with unique audio technology.
            </SubText>

            <div className={styles.facilities}>
              {facilities.map((el, i) => (
                <div className={styles.facility} key={i}>
                  <IoIosCheckmarkCircleOutline className={styles.icon} />
                  <SubText color="#CFCFD1">{el}</SubText>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={videocallsImage} alt="" className={styles.image} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VideoCalls;
