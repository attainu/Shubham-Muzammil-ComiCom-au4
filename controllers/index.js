import { currentUserInfo, currentUserLogout, loginUser, registerUser, loginAdmin } from './auth';
import { addItemToUserCart, addItemToUserWishlist, sendMail } from './feature';
export default({
    currentUserInfo,
    currentUserLogout,
    registerUser,
    loginUser,
    addItemToUserCart,
    addItemToUserWishlist,
    loginAdmin,
    sendMail
})