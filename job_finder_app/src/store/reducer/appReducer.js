import initialState from '../state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addBookmark': {
      const jobDetail = action?.payload?.jobDetail;
      let jobs = state?.jobs;

      jobs = jobs.map((job) => {
        if (job.id === jobDetail.id) {
          let isBookmarked = job.isBookmarked ? false : true;
          job.isBookmarked = isBookmarked;
        }
        return job;
      });

      return {
        ...state,
        jobs,
      };
    }
    default:
      return state;
  }
};
