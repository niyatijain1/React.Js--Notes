import React,{useEffect,useRef} from 'react'

const UseRef2 = () => {

    const count= useRef(0);
     useEffect(()=>{
        console.log("the component rendered")
    })
    const handle=()=>{
        count.current=count.current+1;
        console.log(`the component clicked ${count.current} times`)
    }

  return (
    <div>
        <button onClick={handle}>Click me</button>
      
    </div>
  )
}

export default UseRef2
