import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(10)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Armaan Vasal</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}>Add Value: {counter}
      </button>
      <br /><br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
