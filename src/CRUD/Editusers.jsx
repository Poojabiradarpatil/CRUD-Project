import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"

const Editusers = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()

    let {index}=useParams() 
    console.log(index);

    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp)=>{
            console.log(resp.data);
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        
        })
    },[])

    let editname=(e)=>{
        e.preventDefault()
       setName(e.target.value)
    }
    let editsalary=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
     }
     let editcompany=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
     }

     let formhandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
       axios.put(`http://localhost:3000/content/${index}`,payload)
       .then(()=>{
          alert("Data Updated")
       })
       navigate("/user")

     }

  return (
    <div id={style.myform}>
        <table>
             <th colSpan="2">Update User Details</th>
             {/* <i class="fa-duotone fa-circle-user"></i> */}
            <tr>
              <td><label>Name</label> </td>
              <td><input type="text" value={name} onChange={editname}/></td>
            </tr>
            <tr>
                <td><label>Salary</label> </td>
                <td><input type="text" value={salary} onChange={editsalary}/></td>
            </tr>
            <tr>
                <td><label>Company</label> </td>
                <td><input type="text" value={company} onChange={editcompany}/></td> 
            </tr>
            <tr>
                <th colSpan="2"><button onClick={formhandle}>Update</button></th>
            </tr>
        </table>
    </div>
  )
}

export default Editusers