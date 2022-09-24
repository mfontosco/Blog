import React from 'react'
import styles from './Layout.module.css'
import Navigation from '../../../Navigation/Navigation'


const Layout = ({children}) => {
  return (
    <div className={styles.container} >
        <Navigation/>
        <div className={styles.childrenContainer}>
            <div className={styles.children}>
                {children}
            </div>
        </div>
        
    </div>
  )
}

export default Layout