import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Simant Gautam. All right
                reserved.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
