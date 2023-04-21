import React, { useState } from 'react'

const Add = () => {
  let [state,setState]=useState()
  
  let add=()=>{
    setState(state+1)
}
  return (
    <div>
        <h1>{state}</h1>
       <button onClick={add}>+</button>
       <button>-</button>
       <button>*</button>
    </div>
  )
}

export default Add