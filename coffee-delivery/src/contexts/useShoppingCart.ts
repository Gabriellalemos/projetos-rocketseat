import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCardContext";

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext); // O valor retornado nunca será undefined
};
