import React from 'react';
import styles from './App.module.css';
import {OpeningHours} from './components'
import {ReactComponent as Icon} from './styles/icons/ic-clock.svg'

export const App = () => (
    <div className={styles.app}>
        <OpeningHours
        >
            <Icon className={styles.icon}/>
        </OpeningHours>
    </div>
)