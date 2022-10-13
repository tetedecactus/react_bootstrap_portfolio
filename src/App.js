import './style/App.scss';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
