import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react'

function App() {
  const [num, setNum] = useState(0)

  const inc = ()=>{
    setNum(num + 1)
  }
  const dec = ()=>{
    setNum(num - 1)
  }
  const rst = ()=>{
    setNum(num * 0)
  }


  return (
    <div>
      <h1>Counter App</h1>
      <Button variant="danger" onClick={inc}>Add on</Button>{' '}
      <Button variant="danger" onClick={dec}>Remove on</Button>{' '}
      <Button variant="danger" onClick={rst}>reset</Button>{' '}
      <p>{num}</p>
    </div>
  )
}

export default App