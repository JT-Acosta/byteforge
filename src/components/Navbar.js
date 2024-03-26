import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/byteforge-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLinkOnScroll, setActiveLinkOnScroll] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                updateActiveLinkOnScroll();
            } else {
                setScrolled(false);
            }
        };

        const updateActiveLinkOnScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = section.offsetTop + section.offsetHeight - 100;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveLinkOnScroll(section.id);
                }
            });
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavItemClick = (link) => {
        const section = document.getElementById(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        setActiveLinkOnScroll(link);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLinkOnScroll === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavItemClick('home')}>Home</Nav.Link>
                        <Nav.Link href="#our-skills" className={activeLinkOnScroll === 'our-skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavItemClick('our-skills')}>Our Skills</Nav.Link>
                        <Nav.Link href="#portfolio" className={activeLinkOnScroll === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavItemClick('portfolio')}>Portfolio</Nav.Link>
                        <Nav.Link href="#connect" className={activeLinkOnScroll === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavItemClick('connect')}>Contact Us</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/company/byteforgesolutions'><img src={navIcon1} alt='' /></a>
                            <a href='https://www.facebook.com/profile.php?id=61557518642748'><img src={navIcon2} alt='' /></a>
                            <a href='https://www.instagram.com/byteforgesolutions/'><img src={navIcon3} alt='' /></a>
                        </div>
                        <button className={activeLinkOnScroll === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavItemClick('connect') }><span>Let's Get Started</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};