import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { userHideModal, userShowModal } from "../store/actions/user"
import Auth from '../components/auths/Auth'
import Dialog from '../components/Dialog'
import Header from '../components/Header'

function Layout() {
   const dispatch = useDispatch()
   const isShow = useSelector(state => state.user.isModal)
   const user = useSelector(state => state.user.user)
   const [check, setCheck] = useState(true)
   useEffect(() => {
      if (user) {
         dispatch(userHideModal())
      }
   }, [user])

   return (
      <>
         <Dialog
            isShow={isShow}
            toHide={() => dispatch(userHideModal())}
         >
            <Auth
               setCheck={setCheck}
               check={check}
            />
         </Dialog>

         <Header
            toShow={() => dispatch(userShowModal())}
            setCheck={setCheck}
         />

         <div className="block-header"></div>

         <Outlet />
      </>
   )
}

export default Layout