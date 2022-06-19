import { execFile } from 'child_process';
import { response } from 'express';
import fs, { existsSync, readFileSync, writeFile } from 'fs'

const productsjson = existsSync('products.json') && readFileSync('products.json');
let products = productsjson ? JSON.parse(productsjson) : {}

//func
export const getFullProducts = (request, response) => {
   response.status(200).json(products)
}
export const getProductById = (req, resp) => {
   const item = products.find(i => i.id === req.params.id)
   resp.status(200).json(item)
}
export const getProductJacket = (req, resp) => {
   const items = products.filter(i => i.filter_name === 'Куртка')
   resp.status(200).json(items)
}
export const getProductPants = (req, resp) => {
   const items = products.filter(i => i.filter_name === 'Штаны')
   resp.status(200).json(items)
}
export const getProductShoes = (req, resp) => {
   const items = products.filter(i => i.filter_name === 'Обувь')
   resp.status(200).json(items)
}
export const getProductTShort = (req, resp) => {
   const items = products.filter(i => i.filter_name === 'Футболка')
   resp.status(200).json(items)
}

export const postProductToListByPerson = (req, resp) => {
   resp.status(200).json('привет')
}