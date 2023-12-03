import React from 'react'

import styles from './formMessage.module.css'

type PropsType = {
  msg: string
}

const FormMessage = ({ msg }: PropsType) => {
  return <small className={styles.alert}>{msg}</small>
}

export default FormMessage
