import { Router } from "express";
import { addProduct, removeProduct, singIn, singUp } from "../controllers/auth.js";

const router = Router()

router.post('/singin', singIn)
router.post('/singup', singUp)
router.post('/add', addProduct)
router.post('/remove', removeProduct)



export default router