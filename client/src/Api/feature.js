import axios from "axios";

export const addItemToCart = async (product, userInfo) => {
    try {
        const response = await axios.put(`http://localhost:9090/feature/cart`, {product, userInfo}, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const addItemToWishlist = async (product, userInfo) => {
    try {
        const response = await axios.put(`http://localhost:9090/feature/wishlist`, {product, userInfo}, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { addItemToCart, addItemToWishlist };