export default (
    state = {
      loader: false,
      authenticated: false
    },
    action
  ) => {
    switch (action.type) {
      case "GET_LOGIN_DATA_PENDING":
        return { ...state, loader: true };
  
      case "GET_LOGIN_DATA_SUCCESS":
        return {
          ...state,
          authenticated: action.payload.authenticated,
          loader: false
        };
  
      case "GET_LOGIN_DATA_FAILED":
        return { ...state, payload: action.payload, loader: false };
  
      default:
        return state;
    }
  };
  