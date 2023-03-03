import React from 'react';
import styles from './Schedule.module.css'

export type ItemProps = {
    item: Item
}

function Row({item}: ItemProps) {
    const {caption, marker, list} = item

    // return multiple rows
    // return one row
    // return one row closed
    return (
        <li className={styles.row}>
            <div className={styles.caption}>{caption}</div>
            <div className={styles.marker}>{marker}</div>
            <div className={styles.value}>{list[0]}</div>
        </li>
    )
}

export type ScheduleProps = {
    header: string,
    list: Item[]
}

export function Schedule({header, list}: ScheduleProps) {
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                {header}
            </div>
            <ul className={styles.list}>
                {list.map(item => <Row item={item}/>)}
            </ul>
        </div>
    );
}