import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { logo } from "../../../images/images";
import { Container, SubText, Text } from "../../Commont.styled";
import styles from "./Footer.module.css";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.wrapper}>
      <Container maxWidth="1400px">
        <div className={styles.footer}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="#" className={styles.logo} />
            <SubText className={styles.text} color="#6F7074">
              Made around the world.
            </SubText>
          </div>
          <div className={styles.navItemsContainer}>
            <div className={styles.navItems}>
              <Text fontWeight="700" className={styles.heading}>
                Products
              </Text>
              <Link to="#">
                <SubText color="#57585D">Conference</SubText>
              </Link>
              <Link to="#">
                <SubText color="#57585D">Pricing</SubText>
              </Link>
              <Link to="#">
                <SubText color="#57585D">Solution</SubText>
              </Link>
            </div>
            <div className={styles.navItems}>
              <Text fontWeight="700" className={styles.heading}>
                Company
              </Text>
              <Link to="#">
                <SubText color="#57585D">About</SubText>
              </Link>
              <Link to="#">
                <SubText color="#57585D">Contact</SubText>
              </Link>
              <Link to="#">
                <SubText color="#57585D">Careers</SubText>
              </Link>{" "}
              <Link to="#">
                <SubText color="#57585D">Blog</SubText>
              </Link>
            </div>{" "}
            <div className={styles.navItems}>
              <Text fontWeight="700" className={styles.heading}>
                Support
              </Text>
              <Link to="#">
                <SubText color="#57585D">Contact Us</SubText>
              </Link>
              <Link to="#">
                <SubText color="#57585D">Support Policy</SubText>
              </Link>
              <Link to="#">
                <SubText color="#57585D">Talk to Sales</SubText>
              </Link>
            </div>
          </div>
          <div className={styles.subsCribeContainer}>
            <Text fontWeight="700">Subscribe to our newsletter.</Text>
            <SubText color="#6F7074" className={styles.text}>
              Want to stay up to date with news and updates about our product?
              Subscribe.
            </SubText>
            <form action="">
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  placeholder="email@provider.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className={styles.button}>
                  <HiArrowNarrowRight className={styles.arrow} />
                </button>
              </div>
            </form>
            <p className={styles.info}>
              By subscribing to our newsletter you agree to our privacy policy
              and will get commercial communication.
            </p>
          </div>
        </div>
        <FooterBottom />
      </Container>
    </div>
  );
};

export default Footer;
