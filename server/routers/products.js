import { Router } from "express"
import { getFullProducts, getProductById, getProductJacket, getProductPants, getProductShoes, getProductTShort, postProductToListByPerson } from "../controllers/products.js"

const router = Router()

router.get('/products', getFullProducts)
router.get('/products/:id', getProductById)
// каллекции
router.get('/products/jacket', getProductJacket)
router.get('/products/pants', getProductPants)
router.get('/products/t-short', getProductTShort)
router.get('/products/shoes', getProductShoes)
//person add item
router.post('/users/:id', postProductToListByPerson)
export default router

