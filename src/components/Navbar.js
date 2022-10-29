import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../style/NavBar.scss'
import logo from '../assets/img/logo.svg';
import githubLogo from '../assets/img/icons8-github-purple.svg'
import gmailLogo from '../assets/img/icons8-gmail-purple.svg'
import linkedinLogo from '../assets/img/icons8-linkedin-purple.svg'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function NavBar() {
    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if ( window.scrollY > 50 ) {
                setScrolled(true);
            } 
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar  expand="lg" className={scrolled ? "scrolled" : ''}>
            <Container>
                <Navbar.Brand href="#home" className='logo-header'>
                    <img src={logo} width="100" height="150" className="d-inline-block align-top" alt="logo"/>
                </Navbar.Brand>
                <NavbarToggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggle>
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="text-header ms-auto mb-6 lg-6">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span xs={12} className='navbar-text'>
                        <div className='social-icon'>
                            <a href='mailto:o.labrecque.lacassse@gmail.com'><img src={gmailLogo} alt="gmail-logo" /></a>
                            <a href='https:/www.github.com/tetedecactus'><img src={githubLogo} alt="github-logo" /></a>
                            <a href='https:/www.linkedin.com/in/olivier-labrecque-lacasse/'><img src={linkedinLogo} alt="linkedin-logo" /></a>
                        </div>
                        <Nav.Link href='#contact'>
                            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                        </Nav.Link>
                    </span>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;