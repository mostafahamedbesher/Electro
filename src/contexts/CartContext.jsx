import { createContext, useContext, useReducer } from "react";

const intialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add": {
      return { ...state, cart: [...state.cart, action.payload] };
    }

    default:
      throw new Error("Unknown action type");
  }
}

const CartContext = createContext();

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, intialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("using context outside of CartProvider");
  return context;
}

export { CartProvider, useCart };
