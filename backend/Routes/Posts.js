import express from 'express'
const router = express.Router()
import  {protect,authorizeUser} from '../middleware/auth.js'
import {getAllPost,createPost,updatePost,deletePost,getSinglePost, getPostCategory} from '../controllers/PostControllers.js'

router.route('/').get(getAllPost)
router.route("/create").post(protect,authorizeUser(["admin","client"]),createPost)
router.route('/:id').put(updatePost).delete(authorizeUser(["admin","client"]),deletePost).get(getSinglePost).get(getPostCategory)

export default router