import React from 'react'
import styles from './Input.module.css'

const Input = ({inputPropreties}) => {
  return (
    <input className={styles.input} {...inputPropreties} />
  )
}

export default Input