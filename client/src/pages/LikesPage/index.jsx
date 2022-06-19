import styles from './index.module.scss'
import ProductsList from '../../components/products/ProductList'
import { useSelector } from 'react-redux'

function LikesPage() {
   const list = useSelector(state => state.user.user.addList)
   return (
      <>
         <ProductsList list={list} />
      </>
   )
}

export default LikesPage