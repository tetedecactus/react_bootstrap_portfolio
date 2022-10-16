import { Container, TabContainer, TabContent, TabPane, Col, Row, Nav } from "react-bootstrap"
import ProjectCard from './ProjectCard'
import cub3dImg from  "../assets/img/cub3d.PNG"
import eastclawImg from  "../assets/img/eastclaw.PNG"
import fdfImg from  "../assets/img/fdf.PNG"
import transcendenceImg from  "../assets/img/transcendance.PNG"
import '../style/Projects.scss'
import TrackVisibility from 'react-on-screen';

function Projects() {

    const projects = [
        {
            title: "Fdf",
            description: "File De Fer",
            imgUrl: fdfImg,
        },
        {
            title: "Cub3D",
            description: "Maze | Ray Tracing",
            imgUrl: cub3dImg,
        },
        {
            title: "East Claw Construction",
            description: "WordPress Website",
            imgUrl: eastclawImg,
        },
        {
            title: "transcendance",
            description: "Pong Game Web Site | Chats | Stats ",
            imgUrl: transcendenceImg,
        },
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>info des projet</p>
                                <TabContainer id="projects-tabs" defaultActiveKey="first">
                                    {/* pour plusieur tab de projet ( futur ) */}
                                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                        </Nav.Item>
                                    </Nav> */}
                                    <TabContent id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <TabPane eventKey="first">
                                            <Row className="justify-content-center">
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </TabContainer>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" /> */}
        </section>
    )
}

export default Projects;