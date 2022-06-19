import { useEffect, useState } from "react"
import ProductList from "../../components/products/ProductList"
import styles from './index.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { setProductsHome } from "../../store/actions/homePage"

function HomePage() {
   const products = useSelector(state => state.homePage.products)
   const userList = ['27-1', 2, 3, 5, 6]
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(setProductsHome())
   }, [])

   return (
      <div>
         <div className={styles.container_list}>
            <ProductList list={products} userList={userList} />
         </div>
      </div>
   )
}

export default HomePage