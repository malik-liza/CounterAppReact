import './Counter.css';
import {useState} from 'react';
function Counter(){
  const [value,setValue]=useState(0);
  function increment(){
    setValue(value+1);
  }
  function decrement(){
    setValue(value-1);
  }
  function resetHandler(){
    setValue(0);
  }
  return(
    
    <div className="counter">
      <div className="counter-handler">
        <button onClick={decrement} className='control-button'>- 
        </button>
        <p>{value}</p>
        <button onClick={increment}className='control-button'>+ 
        </button>
      </div>
      <div className="reset">
        <button onClick={resetHandler}className="reset-button">Reset</button>
      </div>
    </div>
   
  );
}
export default Counter;