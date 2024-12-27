import React, { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const existingProduct = basket.find((item) => item.id === product.id);
    if (existingProduct) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const removeFromBasket = (productId) => {
    const existingProduct = basket.find((item) => item.id === productId);
    if (existingProduct.quantity > 1) {
      setBasket(
        basket.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setBasket(basket.filter((item) => item.id !== productId));
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
