const intialState = {
  products: [],
  count: 0,
  amount: 0,
  product_cart: [],
  filteredList: [],
};

export default function Reducer(state = intialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredList: action.payload,
      };
    case "ADD_CART":
      //console.log;
      return {
        ...state,
        count: state.count + parseInt(action.payload.quantity),
        amount: state.amount + action.payload.price * action.payload.quantity,
        product_cart: [...state.product_cart, action.payload],
      };
    case "FILTERED_LIST":
      return {
        ...state,
        filteredList: action.payload,
      };

    default:
      return state;
  }
}
