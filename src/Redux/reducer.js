const intialState = {
  products: [],
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
      };
    default:
      return state;
  }
}
