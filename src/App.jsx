// import React from 'react'

import Add from "./Add"
import Navbar from "./Navbar"
import Stateincre from "./Stateincre"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Explore from "./Explore"
import Hire from "./Hire"
import Dev from "./Dev"
import Challenge from "./Challenge"
import Homepage from "./CRUD/Homepage"
import Createuser from "./CRUD/Createuser"
import Users from "./CRUD/Users"
import Editusers from "./CRUD/Editusers"
import Lifecycle from "./Lifecycle/Lifecycle"
import { useState } from "react"

const App = () => {
  let [state,setState]=useState(true)

  return (
    <div>
      {/* <Stateincre/> */}
    {/* <Add/> */}

      {/* <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/explore' element={<Explore/>} />
        <Route path='/hire' element={<Hire/>}/>
        <Route path='/dev' element={<Dev/>}/>
        <Route path='/challenge' element={<Challenge/>}/>
       </Routes>
      </BrowserRouter> */}

      
      <BrowserRouter>
      <Homepage/>
      <Routes>
        { <Route path="/" element={<Createuser/>}/> /* if we give only it will be considered as a homepage  */}
        <Route path="/user" element={<Users/>}/>
        <Route path="/edit/:index" element={<Editusers/>}/>
      </Routes>
      </BrowserRouter>

       {/* <button onClick={()=>{setState(true)}}>componentMounting</button>
       <button onClick={()=>{setState(false)}}>Componentwillunmount</button>
      {state?<Lifecycle/>:null} */}
    
    </div>
  )
}

export default App