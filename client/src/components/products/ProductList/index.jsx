import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import styles from './index.module.scss'
import { CSSTransition, TransitionGroup, } from 'react-transition-group'

function ProductList({ list }) {
   const userList = useSelector(state => state.user.user?.addList)
   const isActive = useCallback((id) => {

      if (userList) {
         console.log('work:',);
         const bool = userList.filter(i => i.id == id)
         return !!bool.length
      }
      else {
         return false
      }

   }, [userList])

   return (
      <>
         <TransitionGroup className={styles.list} >
            {
               list.map((item) => {
                  return (
                     <CSSTransition key={item.id}
                        classNames={styles.item} >
                        <ProductItem item={item} isActive={isActive} />
                     </CSSTransition>
                  )
               })
            }
         </TransitionGroup>

      </>

   )
}
export default ProductList


/*

<ProductItem item={item} isActive={isActive} />

<div className={styles.list}>
            {
               list.map((item) => {
                  return (
                     <ProductItem key={item.id} item={item} isActive={isActive} />
                  )
               })
            }
         </div>
*/