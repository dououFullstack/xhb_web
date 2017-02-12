const defaultState = {
  title: '',
};

function _reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SET_TITLE' :
      return {title: action.value};
    default:
      return state;
  }
}

export default _reducer;
