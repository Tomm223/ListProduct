
const initState = {
   isModal: false,
   user: null,
   isUser: false,
   error: null
}

export const USER_SET_ISMODAL = 'USER/CHANGE/MODAL'
export const USER_SHOW_ISMODAL = 'USER/SHOW/MODAL'
export const USER_HIDE_ISMODAL = 'USER/HIDE/MODAL'

export const USER_SET = "USER/SET"
export const USER_RESET = "USER/RESET"

export const USER_CHANGE_ISUSER = "USER/CHANGE/ISUSER"

export const USER_SET_ERROR = "USER/SET/ERROR"
export const USER_RESET_ERROR = "USER/RESET/ERROR"

export function userReducer(state = initState, action) {
   switch (action.type) {
      case USER_SET:
         return { ...state, user: action.payload }
      case USER_RESET:
         return { ...state, user: null }
      case USER_CHANGE_ISUSER:
         return { ...state, isUser: action.payload }

      case USER_SET_ISMODAL:
         return { ...state, isModal: action.payload }
      case USER_SHOW_ISMODAL:
         return { ...state, isModal: true }
      case USER_HIDE_ISMODAL:
         return { ...state, isModal: false }

      case USER_SET_ERROR:
         return { ...state, error: action.payload }
      case USER_RESET_ERROR:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}