export const getScreenParent = (route) => {
  let parent;
  let isNavStack = route === 'JobDetail';

  let isTabStack = route === 'Home' || route === 'Bookmarks';

  if (isNavStack) {
    parent = 'NavStack';
  } else if (isTabStack) {
    parent = 'TabStack';
  }
  return parent;
};
