import {useState} from 'react'
import {data} from './data/data'
import ImcCalc from './components/ImcCalc'
import './App.css'

function App() {
 const [imc, setImc] = useState("")
 const [info, setInfo] = useState("")
 const [infoClass, setInfoClass] = useState("")

  return (
    <div className="container">
      <ImcCalc/>
      
    </div>
  )
}

export default App
