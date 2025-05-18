import React, { useState, useEffect } from 'react'

const ListItem = () => {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log('Компонент ListItem обновлен')
  }, [items])

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }

  return (
    <div>
      <h2>Список элементов</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="введите элемент"
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListItem
