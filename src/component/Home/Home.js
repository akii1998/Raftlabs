import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [firstName, setFirstname] = useState("");
  const [secondName, setSecondname] = useState("");
  const [selectRelation, setSelectRelation] = useState("");
  const [data,setData]=useState([])
  const selectRel = [
    "Friend",
    "Father",
    "Mother",
    "Brother",
    "Sister",
    "Son",
    "Daughter",
  ];
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
            onFocus
          />
          <label >Choose the relation</label>
          <select value={selectRelation} onChange={handleSelect}>
            <option >Choose the relation</option>
             {selectRel?.map((ele,i)=><option key={i}>{ele}</option>)}
              </select>
        </form>
      </fieldset>
      <div className="dataContainer">
      <ul>{data?.map((e,i)=><li key={i}>{e}</li>)}</ul>
      </div>
    </div>
  );
};

export default Home;
