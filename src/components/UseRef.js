import React ,{useState,useEffect,useRef} from 'react'

const UseRef = () => {

    const[input,setInput]=useState("")
    const handle = (e)=>{
        setInput(e.target.value)
    }
    const renders= useRef(0)

   useEffect(()=>{
    renders.current= renders.current+1;
   })
  return (
    <div>
      {/* <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} /> */}
      <input type="text" value={input} onChange={handle} />
      <p>the component rendered {renders.current} times.</p>
    </div>
  )
}

export default UseRef
