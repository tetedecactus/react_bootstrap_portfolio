import './style/App.scss';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home />
        <Skills />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
