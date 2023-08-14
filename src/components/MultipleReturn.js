import React,{useState,useEffect} from 'react'

const MultipleReturn = () => {

    const[users,setUsers]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const fetchUsers=async ()=>{
            try{
            let response = await fetch('https://api.github.com/users')
            let data = await response.json()
            setUsers(data);
            setIsLoading(false);
            }catch(error){
                setError(error);
                setIsLoading(false);
            }

        }
        fetchUsers();
    },[])

    if(isLoading){
        return (
            <p>Loading.....</p>
        )
    }
    if(error){
        return (
            <p>error:{error.message}</p>
        )
    }

  return (
    <div>
        <h2>Users List</h2>
        <ul>
            {
                users.map((Element)=>{
                    return(
                    <li key={Element.id}>{Element.login}</li>
                    );

                })
            }
        </ul>
      
    </div>
  )
}

export default MultipleReturn
