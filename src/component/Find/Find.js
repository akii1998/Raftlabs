import React, { useState } from 'react'
import FriendGraph from '../../utils';

const Find = ({friendNodes,friendVertexes}) => {
    const [firstSelectedUser,setFirstSelectedUser] = useState("");
    const [secondSelectedUser,setSecondSelectedUser] = useState("");
    const [connectionLevel,setConnectionLevel]=useState([])
    

   

    const handleFirstUser=(e)=>{
        setFirstSelectedUser(e.target.value)
        
    }
    const handleSecondUser=(e)=>{
        setSecondSelectedUser(e.target.value)
   
    }
    const handleFind=(e)=>{
        const graph = new FriendGraph(Array.from(friendNodes),friendVertexes)
        setConnectionLevel(graph.getFriendConnectionLevel(firstSelectedUser,secondSelectedUser))

    }

    const userList = Array.from(friendNodes);

  return (
    <div>
    <h2>Find Relation</h2>
    <fieldset>
        <form action="">
            <label htmlFor="">Enter First name</label>
            <select onChange={handleFirstUser}>
                <option value="" >Select one</option>
                {userList?.map((e,i)=><option key={i} value={e} >{e}</option>
                )}
            </select>
        </form>
        <form action="">
            <label htmlFor="">Enter second name</label>
            <select onChange={handleSecondUser}>
                <option value="">Select second</option>
                {userList?.map((e,i)=>
                 <option key={i} value={e}>{e}</option>
                )}
            </select>
        </form>
        <button onClick={handleFind}>Find</button>
    </fieldset>
     <div>
        {connectionLevel?.map((e)=>{
            return <p key={e}>{e}</p>
        })}
             </div>
    </div>
  )
}

export default Find