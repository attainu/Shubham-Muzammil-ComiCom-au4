import { fetchUserAction, signinUser, signupUser, setToken, signoutUser } from '../../Api/users'

export const setUserInfo = (userData) => {
  return {
    type: "SET_CURRENT_USER",
    payload: userData,
  }
}

//use DRY method

// for getting list from api calls
export const getUserInfo = () => {
  return async dispatch => {
    try {
      let userResult = await fetchUserAction()
      if(userResult.data.user){
        localStorage.setItem('jwtToken', userResult.data.token);
        setToken(userResult.data.token);
        dispatch(setUserInfo(userResult.data.user));
      }
    } catch (error) {
      console.log("error in getUserInfo", error)
    }
  }
}

//for loggedin
export const signUser = (formInfo) => {
  return async dispatch => {
    try {
      let info = await signinUser(formInfo)
      localStorage.setItem('jwtToken', info.data.token);
      setToken(info.data.token);
      dispatch(setUserInfo(info.data.user));
      dispatch({type : "ADD_TO_CART_INITIAL", payload: info.data.user.cartItems})
      dispatch({type : "ADD_TO_WISHLIST_INITIAL", payload: info.data.user.wishList})
    } catch (error) {
      console.log("error in signinUser", error)
      dispatch({type : "ADD_ERROR", payload : "error"})
    }
  }
}

//for register
export const registerUser = (formInfo) => {
  return async dispatch => {
    try {
      let info = await signupUser(formInfo)
      localStorage.setItem('jwtToken',info.data.token);
      setToken(info.data.token);
      dispatch(setUserInfo(info.data.user));
    } catch (error) {
      console.log("error in registerUser", error)
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    try {
      await signoutUser()
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('featureState');
      setToken(null);
      dispatch(setUserInfo({}));
    } catch (error) {
      console.log("error in logoutUser", error)
    }
  }
}