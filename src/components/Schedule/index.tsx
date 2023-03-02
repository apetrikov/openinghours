import React from 'react';
import styles from './Schedule.module.css'

type Props = {
    header: string,
    list: Item[]
}

export function Schedule({header, list}: Props) {
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                {header}
            </div>
            <ul className={styles.list}>
                {list.map(el => <li className={styles.row}>{el.caption}</li>)}
            </ul>
        </div>
    );
}