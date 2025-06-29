import React, {useState} from 'react';
import './App.css';
import ValueDisplay from './ValueDisplay'

function App() {
  const [inputValue, setInputValue]=useState('')

  const handleInputChange=(e)=>{
    setInputValue(e.target.value)
  }
  return (
    <div className="App">
    <h1>Отслеживание значений</h1>
    <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Введите текст'></input>
    <ValueDisplay value={inputValue}/>
    </div>
  );
}

export default App;
