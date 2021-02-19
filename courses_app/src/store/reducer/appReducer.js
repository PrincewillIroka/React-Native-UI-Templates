import initialState from '../state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addBookmark': {
      const courseDetail = action?.payload?.courseDetail;
      let courses = state?.courses;

      courses = courses.map((course) => {
        if (course.id === courseDetail.id) {
          let isBookmarked = course.isBookmarked ? false : true;
          course.isBookmarked = isBookmarked;
        }
        return course;
      });

      return {
        ...state,
        courses,
      };
    }
    default:
      return state;
  }
};
