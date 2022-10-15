const initialState = {
  users: [
      {
          id: 1,
          username: "admin",
          password: "90099009"
      }
  ],
  currentUser: {},
  isLoggedIn: false,
};

const usersReducer = (state = initialState, {type, payload}) => {
  switch(type){

      case "SIGN_UP":
          return{
              users: [...state.users, payload],
              currentUser:payload,
              isLoggedIn: true,
          };

      case "LOG_IN":
          return{
              users: state.users,
              currentUser:{},
              isLoggedIn: false,
          };

      default:
          return state;
  }
};

export default usersReducer;