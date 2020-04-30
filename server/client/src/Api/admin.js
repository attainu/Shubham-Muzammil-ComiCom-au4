import axios from "axios";

export const signinAdmin = async (formInfo) => {
    try {
        const response = await axios.post(`/auth/admin/login`, formInfo, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const signoutAdmin = async () => {
    try {
        const response = await axios.get(`/auth/admin/logout`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { signinAdmin, signoutAdmin };