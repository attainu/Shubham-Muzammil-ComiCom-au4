import axios from "axios";

export const fetchProducts = async (tag) => {
    try {
        const response = await axios.get(`http://localhost:9090/search/${tag}`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`http://localhost:9090/products`, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const fetchProductDetail = async (id) => {
    try {
        const response = await axios.get(`http://localhost:9090/products/${id}`, { withCredentials: true });
        console.log("response in api", response)
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { fetchProducts, fetchAllProducts, fetchProductDetail};