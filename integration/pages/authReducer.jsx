// src/redux/reducers/authReducer.js
const initialState = {
    loggedInUser: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN_USER':
        return {
          ...state,
          loggedInUser: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  