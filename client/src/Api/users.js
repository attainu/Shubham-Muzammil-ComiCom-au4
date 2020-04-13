import axios from "axios";

export const fetchUserAction = async () => {
    try {
        const response = await axios.get(`http://localhost:9090/auth/current`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signupUser = async (formInfo) => {
    try {
        const response = await axios.post(`http://localhost:9090/auth/register`, formInfo, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signinUser = async (formInfo) => {
    try {
        const response = await axios.post(`http://localhost:9090/auth/login`, formInfo, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signoutUser = async () => {
    try {
        const response = await axios.get(`http://localhost:9090/auth/logout`, { withCredentials: true });
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