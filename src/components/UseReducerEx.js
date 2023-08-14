import React, { useReducer } from 'react'
const initialState={
    data: [],
    loading: false,
    error:null
}
function reducer(state,action){
    switch(action.type){
    case "FETCH_DATA_StART":
        return {...state,loading:true};
        case "FETCH_DATA_SUCCESS":
            return {loading:false,error:null,data:action.payload};
            case "FETCH_DATA_FAILURE":
                return {...state,loading:false,error:action.payload};
                case "DELETE_DATA":
                    return {...state,
                    data:state.data.filter((element)=>
                        element.id!==action.payload
                    )
                    };
                    case "ADD_DATA":
                        return {...state,data:[...state.data,action.payload]};
    }
}

const UseReducerEx = () => {
    const[state,dispatch]=useReducer(reducer,initialState);

    const fechData=async ()=>{
        dispatch({type:"FETCH_DATA_StART"});
        try{
            const response= await fetch('https://jsonplaceholder.typicode.com/users');
            const data =await  response.json();
                 dispatch({type:'FETCH_DATA_SUCCESS',payload:data});
        }catch(error){
            dispatch({type:"FETCH_DATA_FAILURE",payload:error.message});
        }
    }

    const deletedata=(elementId)=>{
     dispatch({type:"DELETE_DATA",payload:elementId})
    }

    const addData=(newData)=>{
        dispatch({type:"ADD_DATA",payload:newData})
    }
  return (
    <div>
      <button onClick={fechData}>Fetch Data</button>
      {state.loading &&<p>Loading...</p>}
      {state.error && <p>error: {state.error}</p>}
      <ul>
        {
            state.data.map((element)=>{
               return ( <li key={element.id}>{element.name}{" "}
               <button onClick={()=>deletedata(element.id)}>delete</button>
               </li>
               
               );
            })
        }
      </ul>
      <form onSubmit={(e)=>{
          e.preventDefault();
         addData({
            id:Date.now(),
            name: e.target.title.value       
          })
      }}> 
        <input type="text" name="title" placeholder='add new item' />
        <button >Add</button>
      </form>
    </div>
  )
}

export default UseReducerEx
