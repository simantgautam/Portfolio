import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/images/profile.png";
import classes from "../../styles/hero.module.css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { text } = useTypewriter({
    words: ["Full Stack Web Developer"],
    loop: {},
  });

  const headingVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const firstSubtitleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const lastSubtitleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <motion.h5
                className={`${classes.section__subtitle}`}
                variants={firstSubtitleVariants}
                initial="hidden"
                animate="visible"
              >
                Hello, It&apos;s Me
              </motion.h5>
              <motion.h2
                className="mt-3 mb-3"
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                SIMANT GAUTAM
              </motion.h2>
              <motion.h5
                className={`${classes.h5_text}`}
                variants={lastSubtitleVariants}
                initial="hidden"
                animate="visible"
              >
                <span className={`${classes.intro}`}>And I&apos;m a</span>
                <span className={`${classes.job__title}`}>
                  <Typewriter
                    options={{
                      strings: ["  Full Stack Web Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </motion.h5>
            </div>
            <div
              className={`${classes.nav__right} mt-5`}
              style={{ display: "flex", gap: "15px" }}
            >
              <motion.a
                className={classes.nav__anc}
                href="https://github.com/simantgautam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BsGithub className={classes.nav__icon} />
              </motion.a>
              <motion.a
                className={classes.nav__anc}
                href="https://www.linkedin.com/in/simant-gautam-4b8146245/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AiOutlineLinkedin className={classes.nav__icon} />
              </motion.a>
              <motion.a
                className={classes.nav__anc}
                href="https://drive.google.com/file/d/1JcJkpMXZvKBSfgATx1aU7-0kB1UYNIK1/view?usp=sharing"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span
                  style={{
                    border: "2px solid #01edff",
                    width: "160%",
                    marginLeft: "10px",
                    fontSize: "large",
                    padding: "5px",
                  }}
                >
                  Resume
                </span>
              </motion.a>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="5" md="5">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={profile} height={400} width={400} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
