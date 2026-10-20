import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react";
function App() {
  const [jokes,setjokes]= useState([]);
  useEffect(()=>{
    axios.get('/api/jokes') //https://localhost:3000/api/jokes
    .then((response)=>{
      setjokes(response.data);
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])
  return (
    <>
    <h1>Chai or code</h1>
    <p>JOKES:{jokes.length}</p>
    {jokes.map((joke,index)=>(
      <div key={joke.id}>
        <h3>{joke.setup}</h3>
        <p>{joke.punchline}</p>
      </div>
    ))}
    </>
  )
}

export default App
