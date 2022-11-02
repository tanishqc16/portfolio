import './About.css';
import Typical from 'react-typical';

const About=()=> {
  return (
    <>
    <div className="navbar" >
      {/* <div className="name-title">
        <h1 style={{color:'white'}}>Tanishq</h1>
      </div> */}
        <div className="navlink">
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </div>
    </div>
    <div className="intro-area">
      <div className="profilepic" >
          <div className="profile-pic-bg">
              
          </div>
      </div>
      <div className="intro" style={{listStyleType:'none', fontSize:'40px', fontFamily: 'Poppins, sans-serif', marginTop:'40px'}}>
          <li style={{color:'#00FF29'}}>Hello I'm</li>
          <li style={{marginLeft:'80px', fontWeight:'450', color:'white', letterSpacing:'4px'}}>Tanishq Chavan</li>
          
          <div style={{fontSize:'15px',marginTop:'15px' ,color:'#979797', fontFamily: 'Alfa Slab One'}}>
          <span className="primary-text">
          {" "}
          <h1>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Competitive Programmer",
                1000,
                "Web Developer",
                1000,
                "Coding Enthusiast",
                1000,
              ]}
              />
          </h1>
          </span>
          </div>
          <p style={{color:'white', fontSize:'25px', letterSpacing:'2px', marginTop:'15px', marginRight:'px'}}>
          Hello everyone I'm Tanishq Chavan also I'am Undergrad pursuing B.tech degree 
          from VIIT, Pune in IT Branch. 
          </p>
      </div>
    </div>
    </>
  );
}
export default About;
