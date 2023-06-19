import './About.css';
import Typical from 'react-typical';
import codechef from '../images/codechef.png';
import leetcode from '../images/leetcode.png';
import codeforces from '../images/codeforces.png';
import github from '../images/github.png';

const About=()=> {
  return (
    <>
    <div className="whole-about">
    <div className="intro-area">
      <div className="profilepic" >
          <div className="profile-pic-bg"></div>
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
                "DSA Enthusiast",
                1000,
              ]}
              />
          </h1>
          </span>
          </div>
          <p style={{color:'white', fontSize:'25px', letterSpacing:'2px', marginTop:'15px', marginRight:'2%'}}>
          Hello everyone myself Tanishq also I'am Undergrad pursuing B.tech degree 
          from VIIT, Pune in IT Branch. 
          </p>
      </div>
    </div>

    <h1  id='about' style={{color:"#00FF29", textAlign:'center', paddingBottom:'20px', fontSize:'60px'}}>About Me</h1>
    <div className="about-achievements">
      <div className="profile-link" style={{color:"white"}}>
        <ul style={{listStyleType:'none'}}>
        <img src={codechef}onClick={()=> window.open("https://www.codechef.com/users/tanishqc16", "_blank")}  alt=""  style={{height:'50px', paddingTop:'25%', paddingBottom:'25%'}}/>        
        <img src={leetcode}onClick={()=> window.open("https://leetcode.com/tanishq16/", "_blank")}  alt=""  style={{height:'50px', paddingTop:'25%', paddingBottom:'25%'}}/>
        <img src={codeforces}onClick={()=> window.open("https://codeforces.com/profile/tanishq__16", "_blank")} alt=""  style={{height:'50px', paddingTop:'25%', paddingBottom:'25%'}}/>        
        <img src={github} onClick={()=> window.open("https://github.com/tanishqc16", "_blank")} alt=""  style={{height:'50px', paddingTop:'25%', paddingBottom:'25%'}}/>
        </ul>
         
      </div>

      <div className="about-area">
        <div className="innerarea">
          <div className='about-txt'>
            <p>
              lorem20Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta atque neque illo nobis culpa. Ex maxime ut totam ipsum non!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dignissimos nam labore facere laboriosam itaque, aperiam illo voluptas ullam sit, quia, impedit magni necessitatibus aspernatur sunt rem non? Eum rerum, tempore unde voluptatum blanditiis consectetur beatae quod enim officiis ad nemo modi facere obcaecati, ab culpa repellendus optio totam id repellat minima quae fuga a! Expedita optio nobis nemo rem laboriosam, necessitatibus molestias eveniet perspiciatis eum! Accusantium, unde, illo tempore inventore dolores est sed itaque voluptas, obcaecati accusamus nisi similique porro deleniti dolorum molestias? Molestiae doloribus deleniti consequatur magnam harum repudiandae quia? Rerum, ipsum officia officiis dignissimos possimus expedita neque?
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default About;
