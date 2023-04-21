import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import style from "./home.module.css"
import {useNavigate} from "react-router-dom"

const Createuser = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")

  let navigate = useNavigate()

  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salaryData=(e)=>{
    setSalary(e.target.value)
  }
  let companyData=(e)=>{
    setCompany(e.target.value)
  }

  let formhandle=(e)=>{
    e.preventDefault()
    let payload={name,salary,company} 
    axios.post("http://localhost:3000/content",payload)
    .then(()=>{
      console.log("Data has been added");
    })
    .catch(()=>{
      console.log("wrong data");
    })
    navigate("/user")
  }

  return (
    <div id={style.myform}>
        <table>
             <th colSpan="2">User Details</th>
             {/* <i class="fa-duotone fa-circle-user"></i> */}
            <tr>
              <td><label>Name</label> </td>
              <td><input type="text" value={name} onChange={nameData}/></td>
            </tr>
            <tr>
                <td><label>Salary</label> </td>
                <td><input type="text" value={salary} onChange={salaryData}/></td>
            </tr>
            <tr>
                <td><label>Company</label> </td>
                <td><input type="text" value={company} onChange={companyData}/></td> 
            </tr>
            <tr>
                <th colSpan="2"><button onClick={formhandle}>SUBMIT</button></th>
            </tr>
        </table>
    </div>
  )
}

export default Createuser