import React ,{useState,useEffect} from 'react'
import CustomHookPart from './CustomHookPart'

const CustomHook = () => {
    const[users]= CustomHookPart();

  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {
                users.map((element)=>{
                   return <li key={element.id}>{element.login}</li>
                })

            }
        </ul>
      
    </div>
  )
}

export default CustomHook
