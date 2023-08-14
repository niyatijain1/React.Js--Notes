import React,{useState,useReducer} from 'react'



const reducer=(state,action)=>{
    if(action.type==="inc"){
        return ({count: state.count+1})
    }else if(action.type==="dec"){
        return({count:state.count+1})
    }else{
        throw new Error("action type not supported")
    }

    
}
const UseReducer = () => {

    // const [count,setCount]=useState(0);
    const[state,dispatch]=useReducer(reducer,{count:0})

    const handleClickDec=()=>{
        // setCount(count+1)
        dispatch({type:"inc"})

    }
    const handleClickInc=()=>{
        // setCount(count-1)
        dispatch({type:"dec"})

    }

      return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  )
}

export default UseReducer
