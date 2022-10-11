import './style/App.scss';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home />
        <Skills />
    </div>
  );
}

export default App;
