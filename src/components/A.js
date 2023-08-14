import React,{createContext} from 'react'
import B from './B'

const GreetContext= createContext();
// const Greet2Context= createContext();
const A = () => {
    const greet="heelo"
    const greet2="hii"
  return (
    <div>
        <GreetContext.Provider value={{greet,greet2}}>
            {/* <Greet2Context.Provider value={greet2}> */}
      <B />
      {/* </Greet2Context.Provider> */}
        </GreetContext.Provider>
    </div>
  )
}

export default A
// export {GreetContext,Greet2Context};
export {GreetContext};
 