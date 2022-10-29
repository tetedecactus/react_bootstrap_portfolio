import NavBar from './Navbar';
import Banner from './Banner';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
        <div>
          <NavBar/>
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </div>
    );
}

export default Home;