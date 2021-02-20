import initialState from '../state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addToCart': {
      const {furniture, type} = action.payload;
      let cart = state?.cart;
      let isFound = cart?.some((item) => item.id === furniture.id);
      if (!isFound && type === 'add') {
        furniture.noInCart = 1;
        cart.push(furniture);
      } else {
        cart = cart.map((product) => {
          if (product.id === furniture.id) {
            if (type === 'add') {
              product.noInCart = product.noInCart + 1;
            } else if (type === 'subtract' && product.noInCart !== 0) {
              product.noInCart = product.noInCart - 1;
            }
          }
          return product;
        });
      }

      return {
        ...state,
        cart,
      };
    }
    default:
      return state;
  }
};
