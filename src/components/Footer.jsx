import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { Col, Container, Row, Button } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <div className="footer__container">
        <Container xs ="6" offset="3" className="">
          <Row>
            <Col className="footer-links">
            <Row className="footer-links">
            <h6  className ="footer-icon"><FontAwesomeIcon icon={faFacebookSquare} /></h6>
                <h6 className ="footer-icon"><FontAwesomeIcon icon={faInstagram} /></h6>
                <h6 className ="footer-icon"><FontAwesomeIcon icon={faTwitterSquare} /></h6>
            </Row>
              <h6 >Audio & Subtitles</h6>
              <h6>Media Centre</h6>
              <h6>Privacy</h6>
              <h6>Contact Us</h6>
              <Button className= "footer-button"> Service Code</Button>
              <p className ="copyright">1997-2020 Netflix, Inc.</p>
            </Col>
            <Col className="footer-links">
              <h6>Audio Description</h6>
              <h6>Investor Relations</h6>
              <h6>Legal Notices</h6>
            </Col>
            <Col className="footer-links">
              <h6>Help Centre</h6>
              <h6>Jobs</h6>
              <h6>Cookies Preferences</h6>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
