import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";


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
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1 className="FullName"> {ResumeHeaderInfo.name}</h1>
                {ResumeHeaderInfo.adress}
                {" "}
                {ResumeHeaderInfo.email}
                {" "}
                {ResumeHeaderInfo.number}
              </div>

            </div>
            <h1 className="test">Professional summary </h1>
            <div className="postTextContainer"> {ResumeHeaderInfo.proSumm} </div>
          </div>
        );
      })}
    </div>
  );
}
export default ResumeDisplay;