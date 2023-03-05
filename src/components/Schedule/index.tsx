import React, {FC, PropsWithChildren} from 'react'
import styles from './Schedule.module.css'
import {Row} from './Row'

type ScheduleProps = PropsWithChildren<{
    header: string,
    items: React.ComponentProps<typeof Row>[],
}>

export const Schedule: FC<ScheduleProps> = ({header, items, children}) => (
    <div className={styles.content}>
        <div className={styles.header}>
            {children}
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
)