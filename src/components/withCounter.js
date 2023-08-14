import React,{useState} from 'react'

const withCounter = (OriginalComponent) => {


    const EnhancedComponent=()=>{

    
    const[count,setCount]=useState(0)
    const handleCount=()=>{
        setCount(count+1)
    }

return(
    <OriginalComponent handleCount={handleCount} count={count}/>
    )
}

  return EnhancedComponent;
      
    
  }

export default withCounter
