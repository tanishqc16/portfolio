import './App.css';
import './Background.css';
import About from'./pages/About';
import Navbar from'./pages/navbar';
import Skills from './pages/Skills';
import Projects from './pages/Projects';


// import Skills from'./pages/Skills';

function App() {
  return (
    <>
    <div className="background" >
      <ul className="Objects">
      <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
    </div >
    </>
  );
}

export default App;
