import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [CurrentTime,setCurrentTime] = useState(new Date());
  useEffect(()=>{
    let Time = setInterval(()=>{
      setCurrentTime(new Date())},1000);
      return(()=> clearInterval(Time));
  },[]);
  
  function convertHour(hour){
    return hour>12 ? hour-12 : hour;
  }
  function AddZoro(num){
    return num<10 ? `0${num}` : num;
  }
  function CreateDate(){
    return CurrentTime.toLocaleDateString();
  }
    return(
      <div className='container'>
        <div className='clock'>
          <h1>Digital clock</h1>
          <div className='time'>
            {AddZoro(convertHour(CurrentTime.getHours()))}
            :
            {AddZoro((CurrentTime.getMinutes()))}
            :
            {AddZoro((CurrentTime.getSeconds()))}
          </div>
          <h3>{CreateDate(CurrentTime)}</h3>
        </div>
      </div>
    );
}

export default App;
