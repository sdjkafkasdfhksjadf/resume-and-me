import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import {  db } from "../firebase";


function ResumeDisplay({ isAuth }) {
  const [resumeLists, setResumeList] = useState([]);
  const resumeCollectionRef = collection(db, "ResumeHeaderInfo");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(resumeCollectionRef);
      setResumeList(data.docs.map((doc) => ({ ...doc.data()})));
    };

    getPosts();
  });
  return (
    <div className="homePage">
      {resumeLists.map((ResumeHeaderInfo) => {
        return (
          <div className="resume">
            <div className="resumeHeader">
              <div className="title">
                <h1 className="FullName"> {ResumeHeaderInfo.name}</h1>
                {ResumeHeaderInfo.adress}
                {" "}
                {ResumeHeaderInfo.email}
                {" "}
                {ResumeHeaderInfo.number}
              </div>

            </div>
            <h1 className="proSum">Professional summary </h1>
            <div className="proSumTextContainer"> {ResumeHeaderInfo.proSumm} </div>
          </div>
        );
      })}
    </div>
  );
}
export default ResumeDisplay;