import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header({ toShow, setCheck }) {
   const user = useSelector(state => state.user.user)
   const navigate = useNavigate()
   return (
      <div className={styles.header}>
         <div className={styles.block}>
            <nav className={styles.nav}>
               <div className={styles.logo}>
                  <div onClick={() => navigate('/')} className={styles.logo_item}>List</div>
               </div>
               {
                  user ?
                     <div className={styles.person}>
                        <div className={styles.person_btn}>
                           <button onClick={() => navigate('/likes')} className='btn'>Избранное</button>
                        </div>
                        <h1>{user.name}</h1>
                     </div>
                     :
                     <div className={styles.auth}>
                        <button onClick={() => { setCheck(true); toShow() }} className="btn">Вход</button>
                        <button onClick={() => { setCheck(false); toShow() }} className="btn">Зарегестрироваться</button>
                     </div>
               }

            </nav>
         </div>
      </div>
   )
}

export default Header