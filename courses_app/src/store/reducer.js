import initialState from './state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addBookmark': {
      const course = action.payload?.course;

      return {
        ...state,
        course,
      };
    }
    default:
      return state;
  }
};
