import styles from './index.module.scss'
import CheckPoint from '../CheckPoint'
import { useDispatch, useSelector } from 'react-redux'
import { addProdInList, removeProdInList } from '../../../store/actions/user'


function ProductItem({ item, isActive }) {
   const dispatch = useDispatch()
   const user = useSelector(state => state.user.user)
   const changeUserList = (bool) => {
      if (!bool) {
         dispatch(addProdInList(user.id, item))
      }
      if (bool) {
         dispatch(removeProdInList(user.id, item))

      }
   }
   return (
      <div key={item.id} className={styles.item} >
         <CheckPoint onClick={changeUserList} active={isActive(item.id)} />
         <img className={styles.img} src={item.img_product} alt="" />
         <div className={styles.item_info}>
            <p className={styles.item_name}>{item.product_name}</p>
         </div>
      </div>
   )
}

export default ProductItem