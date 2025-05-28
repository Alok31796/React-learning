import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount=()=>{
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    //  ye sari satre bdaye ga
    setCount((prevCounter) => prevCounter + 1)   // prevcounter kyu likh pa rha hu to yaad kro argument me kuch bhi naam likh skte h
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
  }
    
  const removeCount=()=>{
    setCount(count - 1)
  }

  return (
    <>
     <h1>Counter in React</h1>
     <h3>Counter value : {count}</h3>
     <button onClick={addCount}>Add Value</button>
     <br/>
     <button onClick={removeCount}>Remove Valuue</button>
     <footer>Footer</footer>
    </>
  )
}

export default App;
