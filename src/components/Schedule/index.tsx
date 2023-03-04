import React from 'react'
import styles from './Schedule.module.css'
import {ReactComponent as Icon} from './ic-clock.svg'
import {Row} from './Row'

type ScheduleProps = {
    header: string,
    items: React.ComponentProps<typeof Row>[]
}

export function Schedule({header, items}: ScheduleProps) {
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <Icon className={styles.icon}/>
                <span className={styles.headerj}>{header}</span>
            </div>
            <ul className={styles.list}>
                {items.map((item, index) => <Row
                    key={index}
                    caption={item.caption}
                    marker={item.marker}
                    value={item.value}
                    isGrey={item.isGrey}
                />)}
            </ul>
        </div>
    );
}