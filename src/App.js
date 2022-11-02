import './App.css';
import './Background.css';
import About from'./pages/About';
import About2 from './pages/About2';
// import Skills from'./pages/Skills';

function App() {
  return (
    <>
    <div className="background" >
      <ul className="Objects">
      <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
      <About/>
      <About2/>
    </div >
    </>
  );
}

export default App;
