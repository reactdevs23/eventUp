import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { secureConferenceImage } from "../../../../images/images";
import { Container, Title, SubText } from "../../../Commont.styled";
import styles from "./SecureConference.module.css";

const SecureConference = () => {
  const facilities = ["Security & Privacy", "Audience Q&A", "Engagement"];
  return (
    <div className={styles.wrapper}>
      <Container maxWidth="1400px">
        <div className={styles.secureConference}>
          <div className={styles.imageContainer}>
            <img src={secureConferenceImage} alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <SubText
              fontWeight="500"
              color="#9F9FA2"
              className={styles.subText}
            >
              <span className={styles.line}></span> BENEFITS OF YOU
            </SubText>
            <Title color="#ffff" className={styles.title}>
              Fast, reliable and secure for your conferences
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
        </div>
      </Container>
    </div>
  );
};

export default SecureConference;
