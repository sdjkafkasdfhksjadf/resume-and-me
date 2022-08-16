import React, { useEffect, useState } from "react";
import { getDocs, collection, doc,deleteDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";


function ResumeDisplay({ isAuth }) {
  const [resumeLists, setResumeList] = useState([]);
  const resumeCollectionRef = collection(db, "CsTemplate");
  



  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(resumeCollectionRef);
      
      
      setResumeList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));  
      
    };
    
    getPosts();

    
    
  },[]);
  
  const deletePost = async (id) => {
    const postDoc = doc(db, "CsTemplate", id);
    await deleteDoc(postDoc);
    window.location.reload()
  };

  
  

  //const id = ResumeHeaderInfo.author.id
  //console.log(id);
  

  
  return (
    
    <div className="DisplayResumePage">
      {resumeLists.map((ResumeHeaderInfo) => {
        if(ResumeHeaderInfo.author.id === auth.currentUser.uid){
          return (
            <div>
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
                <h1 className="proSum">Programs </h1>
                <div className="proSumTextContainer"> 
                  <table >
                    <tr>
                      <td>Programming Languages:</td>
                      <td>{ResumeHeaderInfo.programLang}</td>
                    </tr>
                    <tr>
                      <td>tools/operating systems:</td>
                      <td>{ResumeHeaderInfo.tools}</td>
                    </tr>
                    <tr>
                      <td>Documentation:</td>
                      <td>{ResumeHeaderInfo.documentation}</td>
                    </tr>
                  </table>
                </div>



                <h1 >Education </h1>
                <div>{ResumeHeaderInfo.schoolName1} </div>
                
                <div>{ResumeHeaderInfo.degree1}</div>
                <div>{ResumeHeaderInfo.graduated1}</div>
                <h1 >Experience </h1>
                <div className="proSum">
                  <div>{ResumeHeaderInfo.experience1} </div>
                  <div>{ResumeHeaderInfo.timeWorked1}</div>
                  <div>{ResumeHeaderInfo.description1}</div>
                </div>

                <div className="proSum">
                  <div>{ResumeHeaderInfo.experience2} </div>
                  <div>{ResumeHeaderInfo.timeWorked2}</div>
                  <div>{ResumeHeaderInfo.description2}</div>
                </div>

                <h1 >Projects</h1>
                <div className="proSum">
                  <div>{ResumeHeaderInfo.project1} </div>
                  <div>{ResumeHeaderInfo.projectDescriptor1}</div>
                  
                </div>

                <div className="proSum">
                  <div>{ResumeHeaderInfo.project2} </div>
                  <div>{ResumeHeaderInfo.projectDescriptor2}</div>
                  
                </div>

                



          
              </div>
              <div className="deletePost">
                {ResumeHeaderInfo.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(ResumeHeaderInfo.id);
                    }}
                  >
                    Delete Post
                  </button>
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
export default ResumeDisplay;