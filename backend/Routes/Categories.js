import express from 'express'
const router = express.Router()
import  {createCategory,getCategories} from '../controllers/CategoryControllers.js'


router.route('/').get(getCategories)
router.route('/').post(createCategory)

export default router;