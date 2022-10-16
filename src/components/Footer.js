import { Container, Row, Col } from "react-bootstrap";
import "../style/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col size={12} sm={6}>
            <h3><span>Olivier Labrecque Lacasse</span></h3>
            <p><span>191 Saint-Sauveur, Quebec, Quebec</span></p>
            <p><span>1-418-456-7233</span></p>
          </Col>
          <Col size={12} sm={6}>
            <h3><span>About Me</span></h3>
            <p>Je suis sur le point de terminer ma formation en architecture
                de l’information numérique offerte par 42 Québec et je suis
                du fait même à la recherche d’un stage qui me permettrait
                de perfectionner mon apprentissage. Mes différents mandats
                m’ont amené à prendre en charge des projets d’envergure ce
                qui m’ont permis de développer mes compétences web, mon
                autonomie et perfectionner mon travail d’équipe à travers des
                notions d’organisation et de leadership.</p>
          </Col>
          <Col size={12} sm={12} className="text-center text-sm-center">
            <p id="info-hv">Copyright 2022. My Brain</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;