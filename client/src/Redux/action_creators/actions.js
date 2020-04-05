import { fetchUserAction, signinUser} from '../../Api/users'

//for sending list to store on first load
export const sendUserInfo = (userData) => {
  return {
    type: "GET_USER",
    payload: userData,
  }
}

// for getting list from api calls
export const getUserInfo = () => {
  return async dispatch => {
    try {
      let userResult = await fetchUserAction()
      console.log("userresult", userResult)
      dispatch(sendUserInfo(userResult.data));
    } catch (error) {
      console.log("error in getUserInfo", error)
    }
  }
}

//for loggedin
export const signUser = (formInfo) => {
  console.log(formInfo)
  return async dispatch => {
    try {
      console.log("dsadasd")
      let info = await signinUser(formInfo)
      dispatch({type:"SET_USER", payload:info})
    } catch (error) {
      console.log("error in signinUser", error)
    }
  }
}