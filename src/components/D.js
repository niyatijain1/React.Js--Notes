import React, { useContext } from 'react'
// import { GreetContext ,Greet2Context} from './A'
import { GreetContext } from './A'

const D = () => {
    const useCon= useContext(GreetContext);
   
  return (
    // <GreetContext.Consumer>{
    //    (value)=>{
    //        return (
    //         <Greet2Context.Consumer>{
    //             (value1)=>{
    //                 return <h1>greet:{value}{value1}</h1>
    //             }
    //             }
    //         </Greet2Context.Consumer>
    //        )
       
    //    }
    //    }
    // </GreetContext.Consumer>
    
    <h1>greet:{useCon.greet}:{useCon.greet2}</h1>
  )
}

export default D
