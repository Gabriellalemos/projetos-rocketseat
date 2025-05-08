import { createContext, useState, ReactNode } from "react";

// Definindo a interface para o contexto
export interface ShoppingCartContextProps {
  shoppingCount: number;
  setShoppingCount: (value: number) => void;
}

// Criando um valor padrão
const defaultContextValue: ShoppingCartContextProps = {
  shoppingCount: 0,
  setShoppingCount: () => {}, // Função vazia por padrão
};

// Criando o contexto com um valor padrão
export const ShoppingCartContext =
  createContext<ShoppingCartContextProps>(defaultContextValue);

// Criando o provedor do contexto
export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [shoppingCount, setShoppingCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCount, setShoppingCount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
