import React ,{useState,useEffect} from 'react'

const CustomHookPart = () => {
    const[users,setUsers]=useState([]);
    const[error,setError]=useState(null);

     useEffect(()=>{
        const fetchUsers=async()=>{
        try{
            const response= await fetch('https://api.github.com/users');
            const data = await response.json();
            setUsers(data);
        }catch(error){
            setError(error)
        }
    }
    fetchUsers();

    },[])
    

if(error){
   return <p>error: {error.message}</p>
}
  return [users];
   
      
    
  
}

export default CustomHookPart
