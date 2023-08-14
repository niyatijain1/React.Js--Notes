import React,{useState, useTransition} from 'react'

const UseTransition = () => {
    const[name,setName]=useState("");
    const[lists,setLists]=useState([]);
    const[isPending,startTransition]=useTransition();
    const LIST_size=2000000;

    const handleChange=(e)=>{
        let {value}=e.target
        setName(value);
       const dataList=[]
    startTransition(()=>{
        for(let i =0;i<LIST_size;i++){
            dataList.push(value);
        }
        setLists(dataList);
    
})
}

  return (
    <div>
        <input type="text" value={name} onChange={handleChange} key="input"/>
        {
            isPending? (<div>Loading....</div>):lists.map((element,index)=>{
                return <div key={index}>{lists}</div>
            })
        }
      
    </div>
  )
}

export default UseTransition


