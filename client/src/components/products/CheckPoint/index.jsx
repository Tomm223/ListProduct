import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import styles from './index.module.scss'

function CheckPoint({ active, onClick }) {
   const [src, setSrc] = useState('http://localhost:5000/img/page-icon/heart.png')
   const [classes, setClasses] = useState('classes-default')
   const img = useRef(null)

   useEffect(() => {
      if (active) {
         setSrc('http://localhost:5000/img/page-icon/check-in.png')
         setClasses('classes-active')
      }
      else {
         setSrc('http://localhost:5000/img/page-icon/heart.png')
         setClasses('classes-default')
      }
   }, [active])

   const activeHover = () => {
      if (active) {
         setSrc('http://localhost:5000/img/page-icon/delete-item.png')
      }
   }
   const activeBlur = () => {
      if (active) {
         setSrc('http://localhost:5000/img/page-icon/check-in.png')
      }
   }

   return (
      <div onClick={() => onClick(active)} className={styles[classes]}>
         <img onMouseOver={activeHover} onMouseLeave={activeBlur} ref={img} src={src} alt="" />
      </div>
   )
}

export default CheckPoint