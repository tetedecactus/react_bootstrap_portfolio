import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import '../style/Contact.scss'
import TrackVisibility from 'react-on-screen';
import phone from '../assets/img/phone.png';
import position from '../assets/img/address.png';
import mail from '../assets/img/gmail.png';
import ContactFormToast from "./Toast";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ph749jp', 'template_brxr1ot', form.current, 'ACe5u4N2elgnIIxMo')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("message not sent");

      });
  };

  return (
    <section className="contact" id="contact" >
      <Container>
        <Row className="justify-content-center">
          <Col  xs={9} md={9} xl={9}>
            <section className="contact-card">
              <div>
                <h2><span>Get in Touch</span></h2>
              </div>
              <div className="item d-flex justify-content-right flex-lg-row flex-fill">
                <img className="check" src={phone} width="25" height="25" alt="phone-logo" />
                <p>1-418-456-7233</p>
              </div>
              <div className="item d-flex justify-content-right flex-lg-row flex-fill" >
                <img className="check" src={position} width="25" height="25" alt="position-logo" />
                <p>191 Saint-Sauveur, Quebec, Quebec</p>
              </div>
              <div className="item d-flex justify-content-right flex-md-row flex-fill">
                <img className="check" src={mail} width="25" height="25" alt="mail-logo" />
                <p>o.labrecque.lacasse@gmail.com</p>
              </div>
            </section>
          </Col>
          {/* <ContactFormToast /> */}
          <Col  className="align-items-center"  lg={9} md={9} xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <form ref={form} onSubmit={sendEmail}>
                  <Row className="justify-content-center">
                    <Col size={12} xs={10} sm={9} md={6}   className="px-1">
                      <input type="text" name="user_name" placeholder="First Name"   required />
                    </Col>
                    <Col size={12} xs={10} sm={9} md={6}  className="px-1">
                      <input type="text" name="user_name" placeholder="Last Name"   required />
                    </Col>
                    <Col size={12} xs={10} sm={9} md={6}  className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address"   required />
                    </Col>
                    <Col size={12} xs={10} sm={9} md={6} className="px-1">
                      <input type="tel" name="phone-number" placeholder="Phone No."  required />
                    </Col>
                    <Col size={12} xs={10} sm={9} md={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"  required ></textarea>
                      <button type="submit" value="Send"><span>Send</span></button>
                      {/* <button type="submit"><span>{buttonText}</span></button> */}
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;