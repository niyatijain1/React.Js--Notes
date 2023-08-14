import React from 'react'
import MouseHover from './MouseHover'
import ClickCounter from './ClickCounter'

const HOC = () => {
  return (
    <div>
      <MouseHover/>
      <ClickCounter/>
    </div>
  )
}

export default HOC
