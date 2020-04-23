import {Router} from 'express'
const router = Router()
import {Product} from '../models/index'

router.get('/:tag', async(req, res) => {
    try {
        const {tag} = req.params
       // const regex = new RegExp(escapeRegex(tag), 'gi');
        const searchResult = await Product.find(
            {$text : { $search : tag}},
            { score : { $meta: "textScore" } })
            .sort({ score : { $meta : 'textScore' } })
            //.limit(5)
        res.json(searchResult)
    } catch (error) {
        console.error(error)
        res.status(404).json(error)
    }
})

/* function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}; */

export default router