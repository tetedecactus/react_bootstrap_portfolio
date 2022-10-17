import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../style/Contact.scss'
import TrackVisibility from 'react-on-screen';
import phone from '../assets/img/phone.png';
import position from '../assets/img/address.png';
import mail from '../assets/img/gmail.png';

function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
	
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
          <Col  className="align-items-center"  lg={9} md={9} xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <form onSubmit={handleSubmit}>
                  <Row className="justify-content-center">
                    <Col size={12} xs={10} sm={9} md={6}   className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} xs={10} sm={9} md={6}  className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} xs={10} sm={9} md={6}  className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} xs={10} sm={9} md={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} xs={10} sm={9} md={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
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