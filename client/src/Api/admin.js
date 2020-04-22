import axios from "axios";

export const signinAdmin = async (formInfo) => {
    try {
        const response = await axios.post(`http://localhost:9090/auth/admin/login`, formInfo, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signoutAdmin = async () => {
    try {
        const response = await axios.get(`http://localhost:9090/auth/admin/logout`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { signinAdmin, signoutAdmin };