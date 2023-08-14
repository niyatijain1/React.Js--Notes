import React from 'react'
import withCounter from './withCounter'

const ClickCounter = (props) => {
    
  return (
    <div>
      <button onClick={props.handleCount}>Clicked {props.count}</button>
    </div>
  )
}

export default withCounter(ClickCounter)
