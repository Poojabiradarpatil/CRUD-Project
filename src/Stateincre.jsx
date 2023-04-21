import { useState } from "react"

const Stateincre=()=>{
    let [state,setState]=useState(0)

let btn=()=>{
    setState(state+1)
}
let btn2=()=>{
    setState(state-1)
}
let btn3=()=>{
    setState(0)
}
return(
    <div>
        <h1>{state}</h1>
        <button onClick={btn}>Increment</button>
        <button onClick={btn2}>Decrement</button>
        <button onClick={btn3}>Reset</button>
    </div>
)
}
export default Stateincre



