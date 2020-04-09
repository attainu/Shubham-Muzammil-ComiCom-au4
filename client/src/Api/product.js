import axios from "axios";

export const fetchProducts = async (tag) => {
    try {
        const response = await axios.get(`http://localhost:9090/search/${tag}`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { fetchProducts};