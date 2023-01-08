import { useEffect, useState } from 'react';
import './App.css';
import Find from './component/Find/Find';
import Home from './component/Home/Home';
import FriendGraph from './utils';

function App() {
  const[friendNodes,setFriendNodes]=useState(new Set())
  const[friendVertexes,setFriendVertexes]=useState([])

  // useEffect(()=>{
  //   const graph = new FriendGraph(Array.from(friendNodes),friendVertexes)

  //   console.log("link",Array.from(friendNodes),friendVertexes)
  // },[friendVertexes.length])




  return (
    <div className="App">
     <Home friendNodes={friendNodes} setFriendNodes={setFriendNodes} setFriendVertexes={setFriendVertexes}/>
     <Find friendNodes={friendNodes}  friendVertexes={friendVertexes} />
    </div>
  );
}

export default App;
