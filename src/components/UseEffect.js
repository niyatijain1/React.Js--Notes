import React ,{useState,useEffect} from 'react'

const UseEffect = () => {
    const[clicked,setClicked]=useState()
    const[count,setCount]=useState(0)
    useEffect(()=>{
    console.log("arey arey")
    return(
        ()=>{
            console.log("return")
        }
    )
    },[clicked,count])


  return (
    <div>
      <button onClick={()=>setClicked("subscribe")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={()=>setClicked("to")}>To</button>
      <br />
      <hr />
      <button onClick={()=>setClicked("niyati")}>Niyati</button>
      <h1>{clicked}</h1>
      <hr />
      <button onClick={()=>setCount(count+1)}>INC</button>
      <h2>{count}</h2>
    </div>
  )
}

export default UseEffect
