import React from 'react'
const Keyboard = (props) => {

  
  return (
    <>
    <button className='span-two'  onClick={(e)=>props.setfirst('')}>Ac</button>
    <button  onClick={(e)=>props.setfirst(props.first.slice(0 , -1))} >DEL</button>
    <button onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>/</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>1</button>
    <button onClick={(e)=>props.setfirst(props.first + e.target.innerText)} >2</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>3</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>*</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>4</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>5</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>6</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>+</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>7</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>8</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>9</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>-</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>.</button>
    <button  onClick={(e)=>props.setfirst(props.first + e.target.innerText)}>0</button>
    <button id='eq' className='span-two'  onClick={()=>props.setfirst(eval(props.first))}>=</button>
    </>
  )
}

export default Keyboard