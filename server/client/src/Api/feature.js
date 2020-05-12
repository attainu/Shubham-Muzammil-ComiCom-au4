import axios from "axios";

export const addItemToCart = async (product, userInfo) => {
    try {
        const response = await axios.put(`/feature/cart`, {product, userInfo}, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const addItemToWishlist = async (product, userInfo) => {
    try {
        const response = await axios.put(`/feature/wishlist`, {product, userInfo}, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const sendMailToUs = async (formInfo) => {
    try {
        const response = await axios.post(`/feature/mail`, {formInfo}, { withCredentials: true });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default { addItemToCart, addItemToWishlist };