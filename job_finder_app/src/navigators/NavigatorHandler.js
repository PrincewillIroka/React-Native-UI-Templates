export const handleScreenNavigation = (navigation, route, params) => {
  navigation?.navigate(route, {
    params,
  });
};

export const handleScreenReplace = (navigation, route, params) => {
  navigation?.replace(route, {
    params,
  });
};

export const handleNestedNavigation = (navigation, parent, route, params) => {
  navigation?.navigate(parent, {screen: route, params});
};

export const handleNestedReplace = (navigation, parent, route, params) => {
  navigation?.replace(parent, {screen: route, params});
};

export const handleScreenBack = (navigation) => {
  navigation?.goBack();
};

export const handleRemoveScreen = (navigation) => {
  navigation?.pop();
};
