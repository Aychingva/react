import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './companents/user'

function App() {


  const [val,setval]=useState("")
  return(
    <div className='container'>
      <input type="search" onChange={(e)=>
        {setval(e.target.value)}}/>
      <User val1={val}/>
    </div>
    
  )
  
}

export default App
