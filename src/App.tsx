import { useState } from "react"
// Styles
import "./App.css"
// Components
import { Button } from "./components/Button"
import { Input } from "./components/Input"

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [ans, setAns] = useState("")

  const num1HasValue = Boolean(num1.trim())
  const num2HasValue = Boolean(num2.trim())
  const ansHasValue = Boolean(ans.trim())

  const handleClear = () => {
    setNum1("")
    setNum2("")
    setAns("")
  }
  const handleAdd = () => {
    const _num1 = parseFloat(num1)
    const _num2 = parseFloat(num2)
    const _ans = _num1 + _num2 + ""
    setAns(_ans)
  }

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="fields-container">
          <Input
            type="number"
            name="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <span className="custom-icon">+</span>
          <Input
            type="number"
            name="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <span className="custom-icon"> = </span>
          <input type="text" readOnly value={ans} />
        </div>

        <div className="btn-container">
          <Button
            title="Clear"
            onClick={handleClear}
            disabled={!num1HasValue && !num2HasValue && !ansHasValue}
          />
          <Button
            title="Add"
            disabled={!num1HasValue || !num2HasValue}
            onClick={handleAdd}
          />
        </div>
      </div>
    </div>
  )
}
export default App
