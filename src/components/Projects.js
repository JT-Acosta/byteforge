import { Col, Container, Row, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/Product-1.PNG';
import projImg2 from '../assets/img/justin-dev.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Ultimate Goal",
            description: "Design & Development",
            imgUrl: projImg1
        }
    ];

    const devs = [
        {
            title: 'Justin Acosta',
            description: 'Founder of ByteForge Solutions and lead developer, skilled in full-stack development and CRM integration',
            imgUrl: projImg2
        }
    ];

    return (
        <section className='project' id='portfolio'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility once>
                            {({ isVisible }) => (
                                <div className={`animate__animated ${isVisible ? 'animate__slideInLeft' : 'animate__hidden'}`}>
                                    <h2>Our Company Portfolio</h2>
                                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey='first'>Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='second'>Testimonies</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='third'>Developers</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey='first'>
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='second'>
                                                <p>"Delivered a top-notch website application to one of my clients that helped elevate their business to new heights."<br></br>-<i>Pro Project Innovations</i></p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='third'>
                                                <Row>
                                                    {devs.map((dev, index) => (
                                                            <ProjectCard key={index} {...dev} />
                                                        ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={ colorSharp2 } alt='' />
        </section>
    )
}