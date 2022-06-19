import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userResetError } from '../../../store/actions/user'
import styles from './index.module.scss'

function Form({ onSubmit }) {
   const dispatch = useDispatch()
   const error = useSelector(state => state.user.error)
   const user = useSelector(state => state.user.user)
   useEffect(() => {
      if (user) {
         dispatch(userResetError())
      }
   }, [user])
   const Handler = (e) => {
      e.preventDefault()
      const name = e.target.name.value
      const password = e.target.password.value
      if (name.trim().length && password.trim().length) {
         onSubmit({ name, password })

         e.target.name.value = ''
         e.target.password.value = ''
      }
   }
   return (
      <form onSubmit={Handler} className={styles.form} action="">
         <input className='input' type="text" name="name" placeholder='Имя' />
         <input className='input' type="password" name="password" placeholder='Пароль' />
         <div className={styles.error}><p>{error}</p></div>
         <div className={styles.btn_block}>
            <button type='submit' className='btn'>Отправить</button>
         </div>
      </form>
   )
}

export default Form