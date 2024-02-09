import React from 'react'
import './App.css'
const Content = () => {
    let input = document.getElementById('input');
    let con = document.getElementById('container');
    function add(){
        // let list = document.createElement("li");
        // list.innerHTML = inp.value;
        // console.log(list);    
        // inp.value="";
        console.log(input)
    }
  return (
    <div className='con'>
        <fieldset>
            <div className='inp'>
                <input type="text" placeholder='Enter Task' id='input' />
                <button onClick={add}>Add</button>
            </div>
            <ul id="container">
                <li></li>
            </ul>
        </fieldset>
    </div>
  )
}

export default Content