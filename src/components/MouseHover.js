import React from 'react'
import withCounter from './withCounter'

const MouseHover = (props) => {
    
  return (
    <div>
      <button onMouseOver={props.handleCount}>Clicked {props.count}</button>
    </div>
  )
}

export default withCounter(MouseHover);
