import { FC } from 'react'
import styles from './Row.module.css'

export const Row: FC<Item> = ({ caption, marker, value, isGrey }) => {
  let valueClassName = styles.value
  if (isGrey) valueClassName += ' ' + styles.grey

  return (
    <li className={styles.row}>
      <div className={styles.caption}>{caption}</div>
      <div className={styles.marker}>{marker}</div>
      <div className={valueClassName}>{value}</div>
    </li>
  )
}
