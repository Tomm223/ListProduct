import { getProductsArray } from '../../fetch'
import { HOME_HIDE_ISMODAL, HOME_RESET_ERROR, HOME_SET_ERROR, HOME_SET_ISLOADING, HOME_SET_ISMODAL, HOME_SET_PRODUCTS, HOME_SHOW_ISMODAL } from '../reducers/homePage'
export function setProductsHome() {
   return async (dispatch) => {
      dispatch(setIsLoading(true))
      try {
         const products = await getProductsArray()
         dispatch(setIsLoading(false))
         dispatch({
            type: HOME_SET_PRODUCTS,
            payload: products
         })
      }
      catch {
         dispatch(setIsLoading(false))
         dispatch({
            type: HOME_SET_ERROR,
            payload: 'При загрузке продуктов произошла ошибка'
         })
         setTimeout(() => {
            dispatch({
               type: HOME_RESET_ERROR
            })
         }, 3000)
      }
   }
}


export function setIsLoading(bool) {
   return {
      type: HOME_SET_ISLOADING,
      payload: bool
   }
}