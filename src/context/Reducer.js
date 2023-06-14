import Cart from "../componets/Cart";

export const cartReduceer = (state, action) => {
  switch (action.type) {
    case "Add_TO_Cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove_TO_Cart":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      };
    default:
      return state;
  }
};
