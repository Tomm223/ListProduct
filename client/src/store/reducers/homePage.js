
const initState = {
   products: [],
   isLoading: false,
   error: null
}

export const HOME_SET_PRODUCTS = 'HOME/PRODUCTS/SET'

export const HOME_SET_ISLOADING = 'HOME/CHANGE/LOADING'

export const HOME_SET_ERROR = 'HOME/SET/ERROR'
export const HOME_RESET_ERROR = "HOME/RESET/ERROR"

export function homePageReducer(state = initState, action) {
   switch (action.type) {
      case HOME_SET_PRODUCTS:
         return { ...state, products: action.payload }
      case HOME_SET_ISLOADING:
         return { ...state, isLoading: action.payload }
      case HOME_SET_ERROR:
         return { ...state, error: action.payload }
      case HOME_RESET_ERROR:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}