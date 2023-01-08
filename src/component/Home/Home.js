import React, { useState } from "react";
import "./Home.css";

const Home = ({ friendNodes ,setFriendNodes, setFriendVertexes}) => {
  const [firstName, setFirstname] = useState("");
  const [secondName, setSecondname] = useState("");
  const [selectRelation, setSelectRelation] = useState("Friend");

  const selectRel = [
    "Friend"];
  const handleFirstName = (e) => {
    console.log(e.target.value)
    setFirstname(e.target.value)
  };

  const handleSecondName = (e) => {
    console.log(e.target.value)
   
    setSecondname(e.target.value)
  };

  const handleSelect =(e)=>{
   console.log(e.target.value)
   setSelectRelation(e.target.value)
  }
  const handleAdd=(e)=>{
  e.preventDefault();

  setFriendNodes((prev)=>{
    prev.add(firstName);
    prev.add(secondName);
    return prev;
  })

  setFriendVertexes((prev)=>{
    const clone = [...prev];
    clone.push({source:firstName,target:secondName,relation:selectRelation})
    clone.push({source:secondName,target: firstName,relation:selectRelation})
    return clone;
  })

  setFirstname('')
  setSecondname('')
  // setSelectRelation('')
  }
  return (
    <div className="Main">
      <h1>Welcome to Mutual World</h1>
      <fieldset className="mainContainer">
        <form action="">
         <label htmlFor="">Enter first Candidate</label> 
          <input
            type="text"
            placeholder="Enter name first candidate"
            value={firstName}
            onChange={handleFirstName}
          />
         <label htmlFor="">Enter Second Candidate</label> 
          <input
            type="text"
            placeholder="Enter name first candidate"
            value={secondName}
            onChange={handleSecondName}
          />
          <label >Choose the relation</label>
          <select value={selectRelation} onChange={handleSelect}>
            <option >Choose the relation</option>
             {selectRel?.map((ele,i)=><option key={i} value={ele}>{ele}</option>)}
              </select> 
            <button onClick={handleAdd}>Add</button>
        </form>
       
      </fieldset>
      <div className="dataContainer">
     
      </div>
    </div>
  );
};

export default Home;
