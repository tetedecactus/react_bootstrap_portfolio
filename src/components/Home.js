import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/olabrecq.jpg"
import '../style/Home.scss'

function Home() {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "Web Developper", "Web Designer" ];
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm a Programming Student / `}<span className="wrap">{text}</span></h1>
                        <p>Always having several projects on the go, I often wear several hats 
                            such as co-founder of a digital company, developer, client coordinator, 
                            project manager, etc. My numerous projects in my career path as well as
                            my professional experiences have given me the ability to multi-task, 
                            manage different projects within defined deadlines while prioritizing. 
                            I also participated in the creation and hosting of several websites, 
                            the development of several algorithms as well as graphic projects such as a simplistic 
                            version of Wolfenstien 3D which taught me the basics of ray tracing.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} width="400" height="400" atl="Olivier Labrecque-Lacasse" />
                    </Col>
                </Row>
            </Container>
        </section >
    );
}

export default Home;