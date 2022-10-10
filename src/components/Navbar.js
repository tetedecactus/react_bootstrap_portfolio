import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/Logo.svg';
import githubLogo from '../assets/img/icon-github.svg'
import gmailLogo from '../assets/img/icon-gmail.svg'
import linkedinLogo from '../assets/img/icon-linkedin.svg'


function NavBar() {
    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if ( window.scrollY> 50 ) {
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
        <Navbar bg="dark" expand="lg" className={scrolled ? "scrolled" : ''}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} width="100" height="80" className="d-inline-block align-top" alt="logo"/>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skill" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='mailto:o.labrecque.lacassse@gmail.com'><img src={gmailLogo} alt="gmail-logo" /></a>
                    <a href='https:/www.github.com/tetedecactus'><img src={githubLogo} alt="github-logo" /></a>
                    <a href='https:/www.linkedin.com/in/olivier-labrecque-lacasse/'><img src={linkedinLogo} alt="linkedin-logo" /></a>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}><span> Let's Connect</span></button>
            </span>
        </Container>
        </Navbar>
    );
}

export default NavBar;