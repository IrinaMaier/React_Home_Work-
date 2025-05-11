import React from 'react';
import Greeting from "./components/Greeting";
import ShoppingList from './components/ShoppingList';
import OrderStatus from './components/OrderStatus';


function App() {
  const userName='Irina';
  const products = ['Хлеб', 'Молоко', 'Яйца', 'Фрукты']
  const orders =[
    { orderId: 123, status: 'в пути' },
    { orderId: 456, status: 'обработан' },
    { orderId: 789, status: 'доставлен' }
  ]


  return (
    <div className="App">
    <Greeting name={userName}/>
      <h2>Мой список покупок:</h2>
      <ShoppingList items={products}/>
      <h1>Статус заказов</h1>
      {orders.map(order=>(
        <OrderStatus
        key={order.orderId}
        orderId={order.orderId}
        status={order.status}
        />
      ))}
      </div>
  )
}

export default App;
