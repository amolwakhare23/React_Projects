import React,{useState} from 'react';
import './App.css';




function App() {

  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState();

  const Update=()=>{
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(Update,1000);

  return (
    <>
    <div className="main_div">
    <div className="center_div">   
     <h2>Digital Clock In React JS</h2>
      <h1>{time}</h1>
      </div>
      </div>

    </>
  );
};

export default App;

