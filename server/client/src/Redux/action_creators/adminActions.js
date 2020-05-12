import { signinAdmin, signoutAdmin } from '../../Api/admin'
import { setToken } from '../../Api/users'

export const setAdminInfo = (userData) => {
    return {
        type: "SET_CURRENT_ADMIN",
        payload: userData,
    }
}

//for loggedin
export const loginAdmin = (formInfo) => {
    return async dispatch => {
        try {
            console.log("coming here")
            let info = await signinAdmin(formInfo)
            localStorage.setItem('jwtToken', info.data.token);
            setToken(info.data.token);
            dispatch(setAdminInfo(info.data.admin));
        } catch (error) {
            console.log("error in signinAdmin", error)
        }
    }
}

export const logoutAdmin = () => {
    return async dispatch => {
        try {
            await signoutAdmin()
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('featureState');
            setToken(null);
            dispatch(setAdminInfo({}));
        } catch (error) {
            console.log("error in signoutAdmin", error)
        }
    }
}