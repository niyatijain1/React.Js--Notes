import React ,{useRef,useEffect} from 'react'

const UseRef3 = () => {

   
    const inputEl = useRef("")
    //  useEffect(()=>{
    //     inputEl.current.focus();
    // },[])
    const handle=()=>{
        inputEl.current.style.backgroundColor="black"
    }
    const handle1=()=>{
        inputEl.current.style.backgroundColor=" "
    }

  return (
    <div>
      <input type="text" ref={inputEl} onFocus={handle} onBlur={handle1}/>
    </div>
  )
}

export default UseRef3
