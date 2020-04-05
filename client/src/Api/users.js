import axios from "axios";

export const fetchUserAction = async () => {
    try {
        const response = await axios.get(`http://localhost:9090/auth/current`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signinUser = async (formInfo) => {
    try {
        const response = await axios.post(`http://localhost:9090/auth/login`, formInfo, { withCredentials: true });
        console.log("m i geeting resp", response);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { fetchUserAction, signinUser};