
import { useState } from 'react';
import './App.css'
import Clock from './components/Clock'
import Car from './components/Car';

function App() {

  const [count,setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count-1);
  }

  return (
    <>
      <h1>Hello world</h1>
      <Clock />
      <div style={{border:"2px solid red"}}>
        <button onClick={handleIncrease}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrease}>-</button>
      </div>
      <Car/>
    </>
  )
}

export default App
