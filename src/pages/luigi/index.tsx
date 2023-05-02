import React, { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = () => {
    const newOutputValue = inputValue.replace(/,/g, '\n')
    setOutputValue(newOutputValue)
  }

  return (
    <div className="bg-slate-600 text-black">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="h-10"
      />
      <button onClick={handleButtonClick}>
        Substituir vírgulas por quebras de linha
      </button>
      <textarea value={outputValue} readOnly />
    </div>
  )
}

export default App
