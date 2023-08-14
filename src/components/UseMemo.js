import React ,{useCallback,useState}from 'react'


const Memo = () => {
    const[count,setCount] =useState(0)
    const[input,setInput]=useState("")

    const handleChange=(e)=>{
       setInput(e.target.value)
    }

//    let result = useMemo(()=>{
//     const slowFun=()=>{
//     let sum=0;
//     for(let i =0;i<=10000000000;i++){
//       sum= sum+i;
//     }
//     console.log("hello i am slow")
//     return sum;
//   }
//   slowFun();
// },[])

// let result = useMemo(function slowFun(){
//   let sum=0;
//   for(let i =0;i<=100000;i++){
//     sum = sum+i;
//   }
//   console.log("hello i am slow");
//   return sum;
// },[])
let result = useCallback(function slowFun(){
  let sum=0;
  for(let i =0;i<=100000;i++){
    sum = sum+i;
  }
  console.log("hello i am slow");
  return sum;
},[])
    return (
    <div>
      <h1>{count}</h1>
      <button type="text" onClick={()=>setCount(count+1)}>click me</button>
      <input type="text" onChange={handleChange} value={input}/>
      <h1>input:{input}</h1>
      <br />
      <p>{console.log(result)}</p>
      <p>{console.log(result())}</p>
      
    </div>
  )
}

export default Memo
