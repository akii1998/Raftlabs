import { useState } from 'react';
import './App.css';
import Find from './component/Find/Find';
import Home from './component/Home/Home';

function App() {
  const[friendNodes,setFriendNodes]=useState([])
  const[friendVertexes,setFriendVertexes]=useState([])
  return (
    <div className="App">
     <Home friendNodes={friendNodes}/>
     <Find friendNodes={friendNodes}/>
    </div>
  );
}

export default App;
