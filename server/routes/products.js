import {Router} from 'express'
const router = Router();
import {Product} from '../models/index'
import multer from 'multer'
//import cloudinary from 'cloudinary/lib/v2'
const cloudinary = require('cloudinary').v2
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from "../config/keys";

cloudinary.config({ 
    cloud_name: 'comicom', 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET 
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${+new Date()}.jpg`);
    }
})

const upload = multer({
    storage
});

const getData = async (files) => {
  return Promise.all(files.map(async (file) => {
            const res = await cloudinary.uploader.upload(file.path)
            return res.url
        }))
}

//post comic to db
router.post('/', upload.array('photo'), async (req, res) => {
    try {
        const files = req.files
        getData(files).then(async (path) => {
            const imgURL = {
                posters: [path[0]],
                main: path[1]
            }
            let {name, description, regularPrice, discountedPrice, itemsInStock, publication, characters, tags, category}  = req.body

            characters = JSON.parse(characters)
            tags = JSON.parse(tags)
            category = JSON.parse(category)

            const newComic = {name, description, regularPrice, discountedPrice, itemsInStock, publication, characters, tags, category, imgURL}

            const savedComic = await Product.create(newComic)
            res.status(200).json(savedComic)
        })
    } catch (error) {
        console.error(error)
        res.status(404).json(error)
    }
})

//get all
router.get('/', async(req, res) => {
    try {
        const comics = await Product.find()
        res.json(comics)
    } catch (error) {
        console.error(error)
        res.status(404).json({error})
    }
})

//get one by id
router.get('/:id', async(req, res) => {
    const {id} = req.params
    try {
        const comic = await Product.findById(id)
        res.json(comic)
    } catch (error) {
        console.error(error)
        res.status(404).json({error})
    }
})

//update price or stock availability
router.put('/:id', async(req, res) => {
    const {id} = req.params
    const {discountedPrice, itemsInStock} = req.body
    try {
        const updatedComic = await Product.findByIdAndUpdate(id, {discountedPrice, itemsInStock})
        res.status(200).json("Comic updated")
    } catch (error) {
        console.error(error)
        res.status(404).json({error})
    }
})

//deleted comic from db
router.delete(':id', async(req, res) => {
    const {id} = req.params
    try {
        const deletedComic = await Product.findByIdAndDelete(id)
        res.status(200).json("Comic deleted", deletedComic)
    } catch (error) {
        console.error(error)
        res.status(404).json({error})
    }
})

export default router