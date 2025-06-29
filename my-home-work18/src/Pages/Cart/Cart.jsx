import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartCard from '../../components/CartCard/CartCard'

const Cart = () => {
  const { cartItems } = useContext(CartContext)

  return (
      <div className="cart-container">
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;