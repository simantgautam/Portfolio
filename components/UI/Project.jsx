import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./ProjectItem";
import Image from "next/image";
import portfolioData from "../data/portfolio";
import blue2 from "../../public/images/blue1.PNG";
import swiggy from "../../public/images/Swiggy.png";
import hotstar from "../../public/images/Hotstar.png";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { RiShareBoxFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

import { motion } from "framer-motion";
const Portfolio = () => {
  const [index, setIndex] = useState(0);
  // function loop(count) {
  //   if (count == bluearr.length) {
  //     return (count = 0);
  //   }
  //   if (count < 0) {
  //     return (count = bluearr.length - 1);
  //   }
  //   return count;
  // }
  useEffect(() => {
    // const interval = setInterval(
    //   () => setIndex((count) => loop(count + 1)),
    //   1000
    // );
    // return () => clearInterval(interval);
  });
  return (
    <section id="project">
      <h3 style={{ textAlign: "center", marginBottom: "50px" }}>
        My <span style={{ color: "#01edff" }}>Projects</span>
      </h3>
      <Container>
        <Row>
          {/* Bluemercury */}
          <Col lg="6" md="6">
            <div className={`${classes.tab__btns}`}>
              <Image
                className={`${classes.proj__imgs}`}
                width="420px"
                height="190px"
                alt="img"
                src={blue2}
              />
              <h2 style={{ background: "none" }}>Bluemercury</h2>
              <h5 style={{ background: "none" }}>
                Bluemercury is a leading luxury beauty retailer offering the
                best cosmetics, skin care, makeup, perfume, hair, and bath and
                body.
              </h5>
              <h6 style={{ background: "none", marginTop: "20px" }}>
                {" "}
                Features :{" "}
                <span style={{ color: "#fff", background: "none" }}>
                  Login • Signup • Sort • Filter • Cart • Payment{" "}
                </span>
              </h6>
              <div
                className={`${classes.stack__container}`}
                style={{ background: "none" }}
              >
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <AiOutlineHtml5
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>HTML</h6>
                </div>
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <DiCss3
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>CSS</h6>
                </div>
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <TbBrandJavascript
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>JS</h6>
                </div>
              </div>
              <div
                className={`${classes.git__dep}`}
                style={{ background: "none" }}
              >
                <motion.a
                  className={classes.nav__anc}
                  href="https://github.com/simantgautam/BlueMercury-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsGithub className={classes.nav__icon} />
                </motion.a>
                <motion.a
                  className={classes.nav__anc}
                  href="https://delicate-mousse-661b11.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <RiShareBoxFill className={classes.nav__icon} />
                </motion.a>
              </div>
            </div>
          </Col>

          {/* Swiggy */}
          <Col lg="6" md="6">
            <div
              style={{
                background:
                  "linear-gradient(to left,  rgb(50,55,68,0.8), rgba(1, 237, 255, 0.4))",
              }}
              className={`${classes.tab__btns}`}
            >
              <Image
                className={`${classes.proj__imgs}`}
                width="420px"
                height="190px"
                alt="img"
                src={swiggy}
              />
              <h2 style={{ background: "none" }}>Swiggy-Clone</h2>
              <h5 style={{ background: "none" }}>
                Swiggy is an Indian online food ordering and delivery platform.
                Founded in 2014, Swiggy is based in Bangalore and operates in
                500 Indian cities as of September 2021
              </h5>
              <h6 style={{ background: "none", marginTop: "10px" }}>
                {" "}
                Features :{" "}
                <span style={{ color: "#fff", background: "none" }}>
                  Login • Signup • Sort • Filter • Payment • Food Order{" "}
                </span>
              </h6>
              <div
                className={`${classes.stack__container}`}
                style={{ background: "none", marginTop: "5px" }}
              >
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <AiOutlineHtml5
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>HTML</h6>
                </div>
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <DiCss3
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>CSS</h6>
                </div>
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <TbBrandJavascript
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>JS</h6>
                </div>
              </div>
              <div
                className={`${classes.git__dep}`}
                style={{ background: "none", marginTop: "5px" }}
              >
                <motion.a
                  className={classes.nav__anc}
                  href="https://github.com/simantgautam/Swiggy-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsGithub className={classes.nav__icon} />
                </motion.a>
                <motion.a
                  className={classes.nav__anc}
                  href="https://nimble-tanuki-fe8132.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <RiShareBoxFill className={classes.nav__icon} />
                </motion.a>
              </div>
            </div>
          </Col>

          {/* Hotstar APP */}
          <Col>
            <div
              style={{
                // width: "650px",
                // height: "650px",
                background:
                  "linear-gradient(to top,  rgb(50,55,68,0.8), rgba(1, 237, 255, 0.4))",
                margin: "50px auto",
                marginTop: "50px",
              }}
              className={`${classes.tab__btns}`}
            >
              <Image width="570px" height="220px" alt="img" src={hotstar} />
              <h2 style={{ background: "none" }}>Hotstar-Clone</h2>
              <h5 style={{ background: "none" }}>
                Disney+ Hotstar is an Indian subscription video on-demand
                over-the-top streaming service owned by Novi Digital
                Entertainment of Disney Star and operated by Disney
                Entertainment, featuring domestic Indian film, television and
                sport content for India itself and its worldwide diaspora.
              </h5>
              <h6 style={{ background: "none", marginTop: "10px" }}>
                {" "}
                Features :{" "}
                <span style={{ color: "#fff", background: "none" }}>
                  Login • Signup • Watch Trailer • Subscription • Name update •
                  Search, Filter{" "}
                </span>
              </h6>
              <div
                className={`${classes.stack__container}`}
                style={{ background: "none", marginTop: "5px" }}
              >
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <FaReact
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>React</h6>
                </div>
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <SiRedux
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>Redux</h6>
                </div>

                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <SiChakraui
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>Chakra UI</h6>
                </div>
                <div
                  className={`${classes.service__item}`}
                  style={{ background: "none" }}
                >
                  <AiOutlineMail
                    style={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      background: "none",
                      // marginRight: "5px",
                    }}
                  />
                  <h6 style={{ background: "none" }}>EmailJS</h6>
                </div>
              </div>
              <div
                className={`${classes.git__dep}`}
                style={{ background: "none", marginTop: "5px" }}
              >
                <motion.a
                  className={classes.nav__anc}
                  href="https://github.com/hero007noob/hotstar-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsGithub className={classes.nav__icon} />
                </motion.a>
                <motion.a
                  className={classes.nav__anc}
                  href="https://hotstar-tawny.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <RiShareBoxFill className={classes.nav__icon} />
                </motion.a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
