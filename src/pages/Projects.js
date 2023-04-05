import { useState, useEffect } from "react";
const Projects = (props) => {
  //state to hold projects
  const [projects, setProjects] = useState(null);
  //function that makes api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    //turn response to javascript object
    const data = await response.json();
    console.log(data);
    //set porjects state to the data 
    setProjects(data)
  };
  //make inital call inside of useEffect, so itll only happen ONCE on load
  useEffect(() => {
    getProjectsData();
  }, []);
  //function that will map over the array of projects and return the jsx for project
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img className='projectImg'src={project.image} /><br/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };
  //ternary to render loaded() if we have the data from the api and "loading.. " if we don't.
  return projects ? loaded() : <h1> Loading... </h1>
};

export default Projects;
