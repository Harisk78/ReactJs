import React from 'react'
import './App.css'
const Content = () => {
    function add(){
        let li = document.createElement()
    }
  return (
    <div className='con'>
        <fieldset>
            <div className='inp'>
                <input type="text" placeholder='Enter Task'/>
                <button onClick={add}>Add</button>
            </div>
            <div id='container'>
                <ul>
                    <li>Eat</li>
                    <li>Code</li>
                    <li>Repeat</li>
                </ul>
            </div>
        </fieldset>
    </div>
  )
}

export default Content