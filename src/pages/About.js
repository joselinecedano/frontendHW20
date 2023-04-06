import { useState, useEffect } from "react";
const About = (props) => {
  //create state for about data
  const [about, setAbout] = useState(null);

  //create a function to make api call
  const getAboutData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "about");
    //turn resonse into javascript object
    const data = await response.json();
    //set the about state to the data
    setAbout(data);
    console.log(data);
  };

  //make an initial call for the data inside of a useEffect, so it only happens ONCE on component load.
  useEffect(() => {
    getAboutData();
  }, []);

  //function that'll return the info needed once we get the the data
  const loaded = () => (
    <div className="about">
      <img className="headshot" src={about.headshot} alt="joseline cedano" />
      <h2>Hello my name is {about.name}.</h2>
      <h3>Email: {about.email}</h3>
      <p> {about.bio}</p>
    </div>
  );
  //if data arrives return result of loaded() else return "Loading..."
  return about ? loaded() : <h1> Loading... </h1>;
};

export default About;
