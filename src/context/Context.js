import React, { useReducer } from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReduceer, prodcutReduceer } from "./Reducer";

export const CartItem = createContext();

export default function Context({ children }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const products = [...Array(20)].map(() => ({
    id: faker.number.int(100),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    inStock: getRandomInt(0, 10),
    fastDelivery: faker.datatype.boolean(),
    ratings: getRandomInt(0, 5),
  }));

  const [state, dispatch] = useReducer(cartReduceer, {
    products: products,
    cart: [],
  });
  const [prductstate, productdispatch] = useReducer(prodcutReduceer, {
    byStock: false,
    byFastdelivery: false,
    byRaating: 0,
    serachQuery: "",
  });

  return (
    <CartItem.Provider
      value={{ state, dispatch, prductstate, productdispatch }}
    >
      {children}
    </CartItem.Provider>
  );
}
