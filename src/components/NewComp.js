import React ,{memo}from 'react'

const NewComp = (props) => {
    console.log("newcomp" ,props.newcount)
  return (
    <div>
      <h1>New Comp {props.newcount} </h1>
    </div>
  )
}

export default memo(NewComp);
