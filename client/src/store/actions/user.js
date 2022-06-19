import { pushAddListElement, removeAddListElement } from "../../fetch"
import { USER_HIDE_ISMODAL, USER_RESET, USER_RESET_ERROR, USER_SET, USER_SET_ERROR, USER_SET_ISMODAL, USER_SHOW_ISMODAL } from "../reducers/user"

export function addProdInList(id, element) {
   return async (dispatch) => {
      try {
         const resp = await pushAddListElement(id, element)
         dispatch({
            type: USER_SET,
            payload: resp
         })
      }
      catch (e) {
         dispatch(userSetError(e.response.data))
         setTimeout(() => {
            dispatch(userResetError())
         }, 5000)
      }
   }
}
export function removeProdInList(id, element) {
   return async (dispatch) => {
      try {
         const resp = await removeAddListElement(id, element)
         dispatch({
            type: USER_SET,
            payload: resp
         })
      }
      catch (e) {
         dispatch(userSetError(e.response.data))
         setTimeout(() => {
            dispatch(userResetError())
         }, 5000)
      }
   }
}

export function userSetUser(user) {
   return {
      type: USER_SET,
      payload: user
   }
}
export function userResetUser() {
   return {
      type: USER_RESET
   }
}

export function userSetIsModal(bool) {
   return {
      type: USER_SET_ISMODAL,
      payload: bool
   }
}

export function userHideModal() {
   return {
      type: USER_HIDE_ISMODAL
   }
}
export function userShowModal() {
   return {
      type: USER_SHOW_ISMODAL
   }
}

export function userSetError(str) {
   return {
      type: USER_SET_ERROR,
      payload: str
   }
}
export function userResetError() {
   return {
      type: USER_RESET_ERROR
   }
}