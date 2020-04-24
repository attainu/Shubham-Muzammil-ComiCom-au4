import express from 'express';
import controllers from '../controllers/index';
const router = express.Router();

router.put('/cart', controllers.addItemToUserCart);
router.put('/wishlist', controllers.addItemToUserWishlist);
router.post('/mail', controllers.sendMailToUs);

export default router;