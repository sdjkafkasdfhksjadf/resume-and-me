import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  const [number, setNumber] = useState("");
  const [proSumm, setProSumm] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");

  const postsCollectionRef = collection(db, "ResumeHeaderInfo");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      name,
      adress,
      email,
      number,
      proSumm
    });
    navigate("/ResumeDisplay");
    
  };

  
  
  return (
    <div className="resumeBuildPage">
      <div className="resumeBuildContainer">
        <h1>Create a resume header</h1>

        <div className="question">
          <label> Name:</label>
          <input
             placeholder="Name..."
             onChange={(event) => {
               setName(event.target.value);
             }}
          />
        </div>

        <div className="question">
          <label> Adress:</label>
          <input
             placeholder="Adress..."
             onChange={(event) => {
               setAdress(event.target.value);
             }}
          />
        </div>

        <div className="question">
          <label> Email:</label>
          <input
             placeholder="Email..."
             onChange={(event) => {
               setEmail(event.target.value);
             }}
          />
        </div>

        <div className="question">
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
        <button onClick={createPost}> Submit Post</button>
        
      </div>
    </div>
  );
}

export default CreatePost;