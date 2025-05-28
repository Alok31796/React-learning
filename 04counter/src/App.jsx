import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(0)
  
  // let counter = 5;

  const addValue = ()=>{
    // console.log("value added", Math.random());
    counter = counter + 1
    // console.log(counter);

    // ============ state se ==============

    setCounter(counter)
    // setCounter(counter + 1)
  }

  const removeValue = ()=>{
    if(counter === 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Alok or React {counter}</h1>
      <h1>Counter value: {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
