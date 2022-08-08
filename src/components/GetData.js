import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost() {

  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const postsCollectionRef = collection(db, "DataSearchInfo");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      company,
      jobTitle
    });
    
  };

  
  
  return (
    <div className="dataSearchPage">
      <div className="dataSearchContainer">
        <h1>Search for Job Statistics</h1>

        <div className="question">
          <label> Company:</label>
          <input
             placeholder="Company..."
             onChange={(event) => {
               setCompany(event.target.value);
             }}
          />
        </div>

        <div className="question">
          <label>Job Title:</label>
          <input
             placeholder="Job title..."
             onChange={(event) => {
               setJobTitle(event.target.value);
             }}
          />
        </div>
        </div>
        <button onClick={createPost}> Submit Post</button>
        
      </div>
    
  );
}

export default CreatePost;
