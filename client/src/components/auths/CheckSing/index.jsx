import styles from './index.module.scss'

function CheckSing({ check, setCheck }) {

   return (
      <div className={styles.check}>
         <div className={styles.check_block}>
            <button
               className={check ? styles.check_btn_active : styles.check_btn}
               onClick={() => setCheck(true)}
            >SingIn</button>
            <button
               className={!check ? styles.check_btn_active : styles.check_btn}
               onClick={() => setCheck(false)}
            >SingUp</button>
         </div>
      </div>
   )
}

export default CheckSing