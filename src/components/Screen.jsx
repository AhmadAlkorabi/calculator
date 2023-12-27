import React from 'react'

const Screen = (props) => {
  
  return (
    <div className='output'>
        <div className='prev-operand'>{props.first}</div>
        <div className='current-operand'>{props.first}</div>
    </div>
    
  
  )
}

export default Screen