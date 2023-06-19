import './Skills.css';
import './projects.css';
import Project1 from './Projects/project1';
import Project2 from './Projects/project2';
import Project3 from './Projects/project3';
import Project4 from './Projects/project4';

const Projects=()=> {
  return (

    <div className='Projects-bg' id="projects">
      <h1  id='projects' style={{color:"#00FF29", textAlign:'center', paddingBottom:'5%', fontSize:'60px'}}>Projects</h1>
      
      <div className="allcards" style={{paddingLeft:'5%', paddingBottom:'5%'}}>
        <div className="projectcards" >
        <Project1/>
        </div>
        
        <div className="projectcards">
        <Project2/>
        </div>
        
        <div className="projectcards">
        <Project3/>
        </div>
        
        <div className="projectcards">
        <Project4/> 
        </div>
      </div>
    </div>
  );
}
export default Projects;
