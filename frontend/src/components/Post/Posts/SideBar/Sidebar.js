import React, { useEffect } from 'react'
import styles from './Sidebar.module.css'
import Image4 from '../../../../Images/Image4.jpg'
import { getAllCategoryAction } from '../../../../Redux/Actions/CategoryActions'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = () => {
  const dispatch =useDispatch()
  const {category}=useSelector((state)=>state.getCategories)
  useEffect(()=>{
dispatch(getAllCategoryAction())
  },[dispatch])
  return (
    <div className={styles.container}>
     <div className={styles.category}>
          <div>
            <div>
              <h2>About Me</h2>
            </div>
            <div className={styles.image}>
              <img src={Image4} alt="" />
            </div>
            <div>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo maxime explicabo autem enim laudantium incidunt quaerat, nisi in, ullam sequi dolore amet non animi aspernatur optio nobis reiciendis quisquam vitae! Dolorem excepturi fuga inventore voluptatibus nam quas quisquam esse.</p>
            </div>
          </div>
          <div className={styles.categoryText}>
            <h3>Category</h3>
            <div className={styles.categoryItem}>
            {category && category.length > 0 && category.map((category,i)=>(
              <div key={i} className={styles.name}>{category.name}</div>
            ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar