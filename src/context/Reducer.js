export const cartReduceer = (state, action) => {
  switch (action.type) {
    case "Add_TO_Cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove_TO_Cart":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      };
    case "Change_Cart_Qty":
      return {
        ...state,
        cart: state.cart.filter((i) =>
          i.id === action.payload.id ? (i.qty = action.payload.qty) : i.qty
        ),
      };
    default:
      return state;
  }
};

export const prodcutReduceer = (state, action) => {
  switch (action.type) {
    case "Sort_By_Price":
      return {
        ...state,
        sort: action.payload,
      };
    case "Include_Out_of_Stock":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "Fast_Delivery_Only":
      return {
        ...state,
        byFastdelivery: !state.byFastdelivery,
      };
    case "Rating":
      return {
        ...state,
        byRaating: action.payload,
      };
    case "SerachQuery":
      return {
        ...state,
        serachQuery: action.payload,
      };
    case "Clear_Filters":
      return {
        byStock: false,
        byFastdelivery: false,
        byRaating: 0,
        serachQuery: "",
      };

    default:
      return state;
  }
};
