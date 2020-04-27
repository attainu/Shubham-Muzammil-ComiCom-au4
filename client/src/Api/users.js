import axios from "axios";

export const fetchUserAction = async () => {
    try {
        const response = await axios.get(`/auth/current`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signupUser = async (formInfo) => {
    try {
        const response = await axios.post(`/auth/register`, formInfo, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signinUser = async (formInfo) => {
    try {
        const response = await axios.post(`/auth/login`, formInfo, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signoutUser = async () => {
    try {
        const response = await axios.get(`/auth/logout`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const setToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default { fetchUserAction, signinUser, signupUser, setToken };