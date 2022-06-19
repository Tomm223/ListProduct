import express from "express";
import fs, { existsSync, readFileSync, writeFile } from 'fs'
import serverRouter from "./routers/products.js";
import serverRouteAuth from './routers/auth.js'
import cors from 'cors'
const products = existsSync('products.json') && readFileSync('products.json');
let resp = products ? JSON.parse(products) : {}


const PORT = process.env.PORT ?? 5000
const app = express()
app.use(cors())
app.use(express.json()) // говорим что работаем с json типо иди научись
app.use('/api', serverRouter)
app.use('/auth', serverRouteAuth)
app.use('/img', express.static('./img'))


app.listen(PORT, () => {
   console.log(`Server run  in ${PORT}`);
})




