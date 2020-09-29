const intialState = {
  products: [],
  count: 0,
  amount: 0,
  product_cart: [],
  addProducts: [],
  filteredList: [],
};

export default function Reducer(state = intialState, action) {
  console.log(state.products);
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
      console.log("products", state.products);
      console.log("filteredList", state.filteredList);
      return {
        ...state,
        products: action.payload,
        // state.addProducts.length < 1
        //   ? action.payload
        //   : [...action.payload, ...state.addProducts],
        //products: [...action.payload, ...state.addProducts],
        //filteredList: action.payload,
        filteredList: [...action.payload, ...state.addProducts],
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
    case "ADD_PRODUCTS":
      return {
        ...state,
        addProducts: [...state.addProducts, action.payload],
      };

    default:
      return state;
  }
}
