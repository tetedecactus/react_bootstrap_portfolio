import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cpp from "../assets/img/cplusplus-logo.svg"
import c from "../assets/img/c-logo.svg"
import db from "../assets/img/db-logo.svg"
import html from "../assets/img/html-logo.svg"
import css from "../assets/img/css-logo.svg"
import js from "../assets/img/js-logo.svg"
import angular from  "../assets/img/icons8-angularjs-96.svg"
import react from  "../assets/img/react-logo.svg"
// import wordpress from  "../assets/img/wp-mauve.svg"
import wordpress from  "../assets/img/wp-black.svg"
import '../style/Skills.scss'



function Skills() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Skills Description</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h5>HTML/CSS/JSt</h5>
                                    <img src={html} alt="html logo" />
                                    <img src={css} alt="css logo" />
                                    <img src={js} alt="javascript logo" />
                                </div>
                                <div className="item">
                                    <h5>WordPress</h5>
                                    <img src={wordpress} alt="wordpress logo" />
                                </div>
                                <div className="item">
                                    <h5>C & C++</h5>
                                    <img src={c} alt="c logo" />
                                    <img src={cpp} alt="c++ logo" />
                                </div>
                                <div className="item">
                                    <h5>React & Angular</h5>
                                    <img src={react} alt="react logo" />
                                    <img src={angular} alt="angular logo" />
                                </div>
                                <div className="item">
                                    <h5>DataBase</h5>
                                    <img src={db} alt="database logo" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;