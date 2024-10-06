import React from 'react';
import { pizzaCart } from './pizza';

const Cart = () => {
  const calculateTotal = () => {
    return pizzaCart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {pizzaCart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{pizza.name}</h3>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.count}</p>
              <p>Total: ${pizza.price * pizza.count}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total del Carrito: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;
