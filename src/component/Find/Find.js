import React, { useState } from 'react'

const Find = ({friendNodes}) => {
    const [firstSelectedUser,setFirstSelectedUser] = useState("");
    const [šecondSelectedUser,setSecondSelectedUser] = useState("");
    

   

    const handleFirstUser=(e)=>{
        
    }
    const handleSecondUser=(e)=>{
   
    }
    const handleFind=(e)=>{

    }

  return (
    <div>
    <h2>Find Relation</h2>
    <fieldset>
        <form action="">
            <label htmlFor="">Enter First name</label>
            <select>
                <option value="">Select one</option>
                {friendNodes?.map((e,i)=><option key={i}>{e}</option>
                )}
            </select>
        </form>
        <form action="">
            <label htmlFor="">Enter second name</label>
            <select>
                <option value="">Select second</option>
                {friendNodes?.map((e,i)=>
                 <option key={i}>{e}</option>
                )}
            </select>
        </form>
        <button onClick={handleFind}>Find</button>
    </fieldset>

    </div>
  )
}

export default Find