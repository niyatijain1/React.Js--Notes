import React, { useState } from 'react'

  const Form = () => {

    // const[name,setName]=useState("")
    // const[email,setEmail]=useState("")
    // const[password,setPassword]=useState("")
    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })


    // const handleName=(e)=>{
    //     setName(e.target.value)
    // }
    // const handleEmail=(e)=>{
    //     setEmail(e.target.value)
    // }
    // const handlePassword=(e)=>{
    //     setPassword(e.target.value)
    // }

    const handleInput=(e)=>{
      const {name,value}= e.target
      setData({...data,[name]:value})
    }


    const handleSubmit=(e)=>{
        e.preventDefault();}
        
  return (
    
      <form  onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={data.name} onChange={handleInput}/>
        Email:
        <input type="email" name="email" value={data.email} onChange={handleInput} />
        password:
        <input type="password" name="password" value={data.password} onChange={handleInput}/>
      </label>
      <button type="submit" >Submit</button>
      </form>
   
  )
}


export default Form;