import React from 'react';
import { Col, Container, Row, Nav } from "react-bootstrap";
import '../style/404.scss';
import { ArrowRightCircle } from "react-bootstrap-icons"
import travoltaGif from "../assets/img/travolta-gif.gif"
import Footer from './Footer';

function NotFoundPage() {
    return (
        <section>
            <div className='notFound'>
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col xs={12} md={6} xl={6}>
                            <img className="gif" href="#contact" alt='travolta gif' src={travoltaGif} width="400" height="221" atl="Olivier Labrecque-Lacasse" />
                        </Col>
                        <Col xs={12} md={7} xl={5}>
                            <h1>404</h1>
                            <h2>Page Not Found</h2>
                            <Nav.Link href="/">
                                <button >Go To Home<ArrowRightCircle size={25} /></button>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </section>
    );
}

export default NotFoundPage;

