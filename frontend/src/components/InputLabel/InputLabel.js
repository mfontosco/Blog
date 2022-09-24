import React from 'react'
import styles from './InputLabel.module.css'

const InputLabel = ({text}) => {
  return (
    <label className={styles.label} htmlFor={text}>{text}</label>
  )
}

export default InputLabel