
const changeTabReducer = (state = 'home', action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return action.tab;
    default:
      return state;
  }
}

export default {
  selectedTab: changeTabReducer
}