import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  
  const [number, setNumber] = useState("");
  const [proSumm, setProSumm] = useState("");
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


  const [skil1, setSkill1] = useState("");
  const [skil2, setSkill2] = useState("");
  const [skil3, setSkill3] = useState("");
  const [award1, setAward1] = useState("");
  const [award2, setAward2] = useState("");
  const [award3, setAward3] = useState("");

  

  const postsCollectionRef = collection(db, "BasicTemplate");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      name,
      adress,
      email,
      number,
      proSumm,
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
      skil1,
      skil2,
      skil3,
      award1,
      award2,
      award3,
      author: { id: auth.currentUser.uid }
    });
    navigate("/BasicTemplateDisplay");
    
  };

  
  
  return (
    
    <div className="resumeBuildPage">
      <div className="resumeBuildContainer">
        <h1>  Header</h1>
        <p>Questions can be left blank</p>

        <div className="question">
          <label> Name:</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setName(event.target.value);
             }}
          />
          <label> Address:</label>
          <input
             placeholder="Address..."
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
          <label> Professional summary:</label>
          <textarea
            placeholder="Professional summary:..."
            onChange={(event) => {
              setProSumm(event.target.value);
            }}
          />
        </div>
        
        
      </div>
      <div className="resumeBuildContainer">
        <h1> Education</h1>

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
             placeholder="XXXX-XXXX..."
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
             placeholder="Degree..."
             onChange={(event) => {
               setDegree2(event.target.value);
             }}
          />
          <label> Graduated</label>
          <input
             placeholder="XXXX-XXXX..."
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
             placeholder="XXXX-XXXX..."
             onChange={(event) => {
               setTimeWorked1(event.target.value);
             }}
          />
          <label> Description:</label>
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
             placeholder="XXXX-XXXX..."
             onChange={(event) => {
               setTimeWorked2(event.target.value);
             }}
          />
          <label> Description:</label>
          <textarea
            placeholder="Description:..."
            onChange={(event) => {
              setDescription2(event.target.value);
            }}
          />
        </div>
        
        
        
      </div>

      <div className="resumeBuildContainer">
        <h1>Awards/Skills</h1>

        <div className="question">
          <label> Skill 1</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setSkill1(event.target.value);
             }}
          />
          <label> Skill 2</label>
          <input
             placeholder="Describe..."
             onChange={(event) => {
               setSkill2(event.target.value);
             }}
          />
          <label> Skill 3</label>
          <input
             placeholder="Describe..."
             onChange={(event) => {
               setSkill3(event.target.value);
             }}
          />
        </div>

        <div className="question">
          <label> Award 1</label>
          <input
             placeholder="Award Name..."
             onChange={(event) => {
               setAward1(event.target.value);
             }}
          />
          <label> Award 2</label>
          <input
             placeholder="Award Name..."
             onChange={(event) => {
               setAward2(event.target.value);
             }}
          />
          <label> Award 3</label>
          <input
             placeholder="Award Name..."
             onChange={(event) => {
               setAward3(event.target.value);
             }}
          />
        </div>
        
        <button onClick={createPost}> Submit Post</button>
        
      </div>
      

      





      
      
    </div> 

    

    
  );
}

export default CreatePost;
