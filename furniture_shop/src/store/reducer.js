import initialState from './state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addToCart': {
      const cart = action.payload?.cart;

      return {
        ...state,
        cart,
      };
    }
    default:
      return state;
  }
};
