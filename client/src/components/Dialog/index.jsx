import { useRef } from 'react'
import styles from './index.module.scss'

function Dialog({ isShow, children, toHide }) {
   const back = useRef(null)
   function handle(e) {
      if (e.target === back.current) {
         toHide()
      }
   }
   return (
      <div className={isShow ? styles.back : styles.none} ref={back} onClick={handle}>
         <div className={styles.modal}>
            <div className={styles.close}>
               <img src="/img/close.png" alt="" onClick={toHide} />
            </div>
            {children}
         </div>
      </div>
   )
}

export default Dialog