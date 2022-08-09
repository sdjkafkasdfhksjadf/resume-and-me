import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  
  const [number, setNumber] = useState("");
  
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");


  const [schoolName1, setSchoolName1] = useState("");
  const [degree1, setDegree1] = useState("");
  const [graduated1, setGraduated1] = useState("");
  const [schoolName2, setSchoolName2] = useState("");
  const [degree2, setDegree2] = useState("");
  const [graduated2, setGraduated2] = useState("");

  const [experience1, setExperience1] = useState("");
  const [timeWorked1, setTimeWorked1] = useState("");
  const [description1, setDescription1] = useState("");
  const [experience2, setExperience2] = useState("");
  const [timeWorked2, setTimeWorked2] = useState("");
  const [description2, setDescription2] = useState("");


  const [programLang, setProgramLang] = useState("");
  const [tools, setTools] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [project1, setProject1] = useState("");
  const [project2, setProject2] = useState("");
  const [projectDescriptor1, setProjectDescriptor1] = useState("");
  const [projectDescriptor2, setProjectDescriptor2] = useState("");
  

  

  const postsCollectionRef = collection(db, "CsTemplate");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      name,
      adress,
      email,
      number,
      schoolName1,
      degree1,
      graduated1,
      schoolName2,
      degree2,
      graduated2,
      experience1,
      timeWorked1,
      description1,
      experience2,
      timeWorked2,
      description2,
      programLang,
      tools,
      documentation,
      project1,
      project2,
      projectDescriptor1,
      projectDescriptor2,
      author: { id: auth.currentUser.uid }
    });
    navigate("/CsTemplateDisplay");
    
  };

  
  
  return (
    
    <div className="resumeBuildPage">
      <div className="resumeBuildContainer">
        <h1>  header</h1>
        <p>Questions can be left blank</p>

        <div className="question">
          <label> Name:</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setName(event.target.value);
             }}
          />
          <label> Adress:</label>
          <input
             placeholder="Adress..."
             onChange={(event) => {
               setAdress(event.target.value);
             }}
          />
          <label> Email:</label>
          <input
             placeholder="Email..."
             onChange={(event) => {
               setEmail(event.target.value);
             }}
          />
          <label> Number:</label>
          <input
             placeholder="Number..."
             onChange={(event) => {
               setNumber(event.target.value);
             }}
          />
        </div>

        
        <div className="question">
          <label> Program Languages</label>
          <input
             placeholder="C++/C/python..."
             onChange={(event) => {
               setProgramLang(event.target.value);
             }}
          />
          <label> OS systems and Tools</label>
          <input
             placeholder="Unix/Bash, Linux, git..."
             onChange={(event) => {
               setTools(event.target.value);
             }}
          />
          <label> Documentation </label>
          <input
             placeholder="MS word, Excel..."
             onChange={(event) => {
               setDocumentation(event.target.value);
             }}
          />
        </div>
        
        
      </div>
      <div className="resumeBuildContainer">
        <h1> education</h1>

        <div className="question">
          <label> School Name</label>
          <input
             placeholder="School Name..."
             onChange={(event) => {
               setSchoolName1(event.target.value);
             }}
          />
          <label> Degree</label>
          <input
             placeholder="Degree..."
             onChange={(event) => {
               setDegree1(event.target.value);
             }}
          />
          <label> Graduated</label>
          <input
             placeholder="xxxx - xxxx"
             onChange={(event) => {
               setGraduated1(event.target.value);
             }}
          />
        </div>

        <div className="question">
          <label> School Name</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setSchoolName2(event.target.value);
             }}
          />
          <label> Degree</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setDegree2(event.target.value);
             }}
          />
          <label> Graduated</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setGraduated2(event.target.value);
             }}
          />
        </div>
        
        
        
      </div>
      <div className="resumeBuildContainer">
        <h1> Experience</h1>

        <div className="question">
          <label> Name of Experience</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setExperience1(event.target.value);
             }}
          />
          <label> Time worked</label>
          <input
             placeholder="xxxx - xxxx..."
             onChange={(event) => {
               setTimeWorked1(event.target.value);
             }}
          />
          <label> Description::</label>
          <textarea
            placeholder="Description:..."
            onChange={(event) => {
              setDescription1(event.target.value);
            }}
          />
        </div>

        <div className="question">
          <label> Name of Experience</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setExperience2(event.target.value);
             }}
          />
          <label> Time worked</label>
          <input
             placeholder="xxxx - xxxx..."
             onChange={(event) => {
               setTimeWorked2(event.target.value);
             }}
          />
          <label> Description:</label>
          <textarea
            placeholder="Description..."
            onChange={(event) => {
              setDescription2(event.target.value);
            }}
          />
        </div>
        
        
        
      </div>

      <div className="resumeBuildContainer">
        <h1>Projects</h1>

        <div className="question">
        <label> Project Name </label>
          <input
             placeholder="Project Name..."
             onChange={(event) => {
               setProject1(event.target.value);
             }}
          />
          <label> Description</label>
          <textarea
             placeholder="Description..."
             onChange={(event) => {
              setProjectDescriptor1(event.target.value);
             }}
          />
          <label> Project Name </label>
          <input
             placeholder="Project Name..."
             onChange={(event) => {
               setProject2(event.target.value);
             }}
          />
          <label> Description</label>
          <textarea
             placeholder="Project Name..."
             onChange={(event) => {
               setProjectDescriptor2(event.target.value);
             }}
          />
          
        </div>
        
        <button onClick={createPost}> Submit Post</button>
        
      </div>
      

      





      
      
    </div> 

    

    
  );
}

export default CreatePost;