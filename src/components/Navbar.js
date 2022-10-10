import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Logo.svg';
import githubLogo from '../images/icon-github.svg'
import gmailLogo from '../images/icon-gmail.svg'
import linkedinLogo from '../images/icon-linkedin.svg'


function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} width="100" height="80" className="d-inline-block align-top" alt="logo"/>
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='mailto:o.labrecque.lacassse@gmail.com'><img src={gmailLogo} alt="gmail-logo" /></a>
                <a href='https:/www.linkedin.com/in/olivier-labrecque-lacasse/'><img src={linkedinLogo} alt="linkedin-logo" /></a>
                <a href='https:/www.github.com/tetedecactus'><img src={githubLogo} alt="github-logo" /></a>
            </div>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;