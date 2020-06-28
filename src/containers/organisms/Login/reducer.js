import {} from "./constants";

const initialState = {};

const LoginReducer = (state = initialState, action) => {
  const { type, data, error } = action;
  switch (type) {
    /*case INVITE_A_FRIEND:
return Object.assign({}, state, {
isFetching: true,
showSuccess: false,
showError: false,
});*/

    default:
      return state;
  }
};

export default LoginReducer;
