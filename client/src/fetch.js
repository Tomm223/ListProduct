import axios from "axios"

export const getProductsArray = async () => {
   const resp = await axios.get('http://localhost:5000/api/products')
   return resp.data.products
}

export async function postFormSingIn(user) {
   const resp = await axios.post('http://localhost:5000/auth/singin', user)
   return resp.data
}
export async function postFormSingUp(user) {
   const resp = await axios.post('http://localhost:5000/auth/singup', user)
   return resp.data
}
export async function removeAddListElement(id, element) {
   const body = { id, element }
   const resp = await axios.post('http://localhost:5000/auth/remove', body)
   return resp.data
}
export async function pushAddListElement(id, element) {
   const body = { id, element }
   const resp = await axios.post('http://localhost:5000/auth/add', body)
   return resp.data
}
