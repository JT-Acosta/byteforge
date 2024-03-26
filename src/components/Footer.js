import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/byteforge-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Newsletter } from "./Newsletter";

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Newsletter />
                    <Col sm={ 6 }>
                        <img src={ logo } alt='logo'/>
                    </Col>
                    <Col sm={ 6 } className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/company/byteforgesolutions"><img src={ navIcon1 } alt="" /></a>
                            <a href="https://www.facebook.com/profile.php?id=61557518642748"><img src={ navIcon2 } alt="" /></a>
                            <a href="https://www.instagram.com/byteforgesolutions/"><img src={ navIcon3 } alt="" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved by ByteForge Solutions</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}