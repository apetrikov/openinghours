import styles from './Row.module.css'

type Item = {
  caption?: string,
  value?: string,
  marker?: string,
  isGrey?: boolean
}

export function Row({caption, marker, value, isGrey}: Item) {
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