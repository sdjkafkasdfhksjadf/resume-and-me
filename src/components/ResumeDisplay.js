import React, { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import { db, auth } from "../firebase";


function ResumeDisplay({ isAuth }) {
  const [resumeLists, setResumeList] = useState([]);
  const resumeCollectionRef = collection(db, "ResumeHeaderInfo");
  



  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(resumeCollectionRef);
      
      
      setResumeList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));  
      
    };
    
    getPosts();

    
    
  },[]);
  
  

  
  

  //const id = ResumeHeaderInfo.author.id
  //console.log(id);
  

  
  return (
    
    <div className="homePage">
      {resumeLists.map((ResumeHeaderInfo) => {
        if(ResumeHeaderInfo.author.id === auth.currentUser.uid){
          return (
            <div className="resume" >
              <div className="resumeHeader">
                <div className="title">
                  <h1 className="FullName"> {ResumeHeaderInfo.name}</h1>
                  {ResumeHeaderInfo.adress}
                  {" --- "}
                  {ResumeHeaderInfo.email}
                  {" --- "}
                  {ResumeHeaderInfo.number}
                </div>

              </div>
              <h1 className="proSum">Professional summary </h1>
              <div className="proSumTextContainer"> {ResumeHeaderInfo.proSumm} </div>
            </div>
          );
        }
      })}
    </div>
  );
}
export default ResumeDisplay;