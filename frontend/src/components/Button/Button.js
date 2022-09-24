import React from 'react'
import styles from './Button.module.css'

const Button = ({text,style,onClick}) => {
  return (
    <button className={styles.btn} onClick={onClick} style={{...style}}>{text}</button>
  )
}

export default Button