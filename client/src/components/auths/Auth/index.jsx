import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postFormSingIn, postFormSingUp } from '../../../fetch'
import { userResetError, userSetError, userSetUser } from '../../../store/actions/user'
import CheckSing from '../CheckSing'
import Form from '../Form'
import styles from './index.module.scss'


function Auth({ check, setCheck }) {
   const dispatch = useDispatch()

   const onSubmit = async (formValues) => {
      console.log(formValues);
      try {
         if (check) {
            const resp = await postFormSingIn(formValues)
            dispatch(userSetUser(resp))
            dispatch(userResetError())
         }
         if (!check) {
            const resp = await postFormSingUp(formValues)
            dispatch(userSetUser(resp))
            dispatch(userResetError())
         }
      }
      catch (e) {
         dispatch(userSetError(e.response.data))
         console.log("ERROR:", e.response.data);

      }
   }
   return (
      <>
         <CheckSing check={check} setCheck={setCheck} />
         <Form onSubmit={onSubmit} />
         <div className={check ? styles.supp_active : styles.supp_none}>
            <p>Если у вас нет аккаунта то <span className={styles.span}
               onClick={() => check && setCheck(false)}
            >Зарегестрируйтесь</span>
            </p>
         </div>
      </>
   )
}

export default Auth