import React, {useEffect} from 'react'
import Typed from 'typed.js'
import './App.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function App() {


  const projectData = [
    {
      title: "Contact Manager",
      desc: "A WebApp to store your contacts.",
      stack: ['FIREBASE','BOOTSTRAP','REACT'],
      live_link: "https://mycontactoncloud.netlify.app/",
      git_link: "https://github.com/beingabhi007/Contact-Manager",
      poster_url: "Proj1.png"
    },
    {
      title: "GitHub Dashboard",
      desc: "A WebApp to compare stats and view github profile.",
      stack: ['FIREBASE','BOOTSTRAP','REACT'],
      live_link: "https://githubdashboardapi.netlify.app/",
      git_link: "https://github.com/beingabhi007/githubdashboard",
      poster_url: "Proj4.png"
    },
    {
      title: "Online Blogging Plateform",
      desc: "A Blogging Plateform to share your thoughts.",
      stack: ['PHP','BOOTSTRAP','MYSQL'],
      live_link: "http://www.onlinebloggingplateform.epizy.com/",
      git_link: "https://github.com/beingabhi007/Online-Blogging-Platform",
      poster_url: "Proj2.png"
    },
    {
      title: "NoSave WhatsApp",
      desc: "Send Whatsapp messages without saving number in contact list.",
      stack: ['BOOTSTRAP','REACT'],
      live_link: "http://nosave.netlify.app/",
      git_link: "http://nosave.netlify.app/",
      poster_url: "Proj3.png"
    }
    
  ];
  
  const backToTop = () => {
    console.log('Back to top');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  

  useEffect(() => {
  new Typed('.title4', {
    strings: ['JavaScript Developer based in INDIA'],
    typeSpeed: 100
  })
  
    
  },[]);

 

    return (
      <>
        <div className="home_component" id="home_component">
        {/* Navbar here */}

       <ul>
       <AnchorLink 
       className="nav_links"
       href='#contact_component'>Contact</AnchorLink>

       <AnchorLink 
       className="nav_links"
       href='#projects_component'>Work</AnchorLink>

       <AnchorLink 
       className="nav_links"
       href='#about_me_component'>About</AnchorLink>

       </ul>

        <div className="container" >
        <div className="row">
          <div className="col-lg-8 col-sm-12 mx-auto">
            <h3 className="title1">Hi,</h3>
            <span className="title2">I'm </span>
            <span className="title3">Abhi</span> <br/>
            <span className="title3">A </span>
            <span className="title4" id="typed"></span>
        </div>

          {/* <div className="col-lg-6">
          <img src="abhi_sahu.png" className="myimg"
          alt="imageofme"/>
              </div>   */}

        </div></div>  

<br/><br/><br/>
{/* <div className="text-center">
<span className="hire_me">Know more...</span>
</div> */}
{/* <h5 className="text-center">Scroll for more</h5> <br/> */}
{/* <h5 className="text-center" style={{fontSize: "60px"}}><i className="fa fa-angle-double-down text-center"></i></h5> */}
        </div>

 {/* About me Section */}

 <div className="about_me_component" id="about_me_component">
<p className="about_heading" >About Me</p>
<br/>
<div className="container">
 <div className="row">
 

  <div className="col-lg-4 offset-0">
    <img src="abhi_sahu.png"
    width="100%"
    className="about_image"
     alt="MY"/>
  </div>

  <div className="col-lg-6 offset-1">
    <p className="about_text" >Being a CSE graduate, exploring the field of Software Engineering,
    having experience of working with Reactjs, MongoDB, MySQL, HTML, CSS,
    NodeJS, Firebase and GIT.
    </p>
  </div> 
 </div> 
</div>
 </div>


{/* Project component */}

<div className="projects_component" id="projects_component">
<p className="project_heading mb-5" >TAKE A LOOK AT MY WORK</p>

 {projectData.map(project => {
   return(
    <div className="row">
 <div className="col-lg-4 offset-1">
   <p className="text-white project_text1">{project.title}</p>
   <p className="text-white project_text2">{project.desc}</p>
   
   
   <ul>
   {project.stack.map(s => {
     return(
      <li className="text-white project_text3">{s}</li>  
     )
   })}
   </ul> <br/><br/>
   
   <a target="_blank" rel="noreferrer" href={project.live_link}><i className="fa fa-link project_icons"></i></a>
   <a target="_blank" rel="noreferrer" href={project.git_link}><i className="fa fa-github ml-5 project_icons"></i></a>
 </div>  

 <div className="col-lg-6">
   <img src={project.poster_url} 
   className="project_images"
   alt="PROJ1"
   />
 </div>
 </div> 
   )
 })}
 <br/><br/><br/><br/><br/>
</div>
     
{/* contact component */}

<div className="contact_component" id="contact_component">
<p className="about_heading" >Get in touch</p>
<br/><br/><br/>
<div className="container">
<div className="row">
 <div className="col-lg-6 mx-auto">
 <form>
  <div class="form-group">
    <input 
    type="text" 
    className="form-control"
     placeholder="Enter your name"/>
  </div>
  <div class="form-group">
    <input type="email"
     className="form-control"
     placeholder="Enter your email"/>
  </div>
  <div class="form-group">
    <textarea type="email"
     className="form-control"
     rows="10"
     placeholder="Enter your message"/>
  </div>
  
  <button 
  type="submit" 
  className="btn btn-primary btn-block">Submit</button>
</form>
  </div> 
</div>  
</div>
  <div>
  <i className="fa fa-arrow-circle-up uparrow" 
  onClick={backToTop}
  ></i>
  </div>
</div>   
     </>
        
    )
}


