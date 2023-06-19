import './About.css';
import Typical from 'react-typical';

function navbar() {
  return (
    <>
    <div className="navbar" >
      {/* <div className="name-title">
        <h1 style={{color:'white'}}>Tanishq</h1>
      </div> */}
        <div className="navlink">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
    </div>
    
    </>
  );
}
export default navbar;
