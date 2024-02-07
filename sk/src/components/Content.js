import React, { useState } from 'react'
import './Content.css'
const Content = () => {
    const [count,setCount] = useState(99);
    function increment(){
        setCount((count) => {
            return count+=1
        })
    }
    function decrement(){
        setCount((count)=>{
            return count-=1
        })
    }
  return (
    <div className='Con'>
        <div className="count">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Content