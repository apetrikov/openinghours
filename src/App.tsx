import React from 'react';
import styles from './App.module.css';
import {OpeningHours} from './components'
import {ReactComponent as Icon} from './styles/icons/ic-clock.svg'
import input from './input/input.json'
import simulateEndpoint from "./api/endpoint";

export const App = () => (
    <div className={styles.app}>
        <OpeningHours
            rawInput={simulateEndpoint(input)}
        >
            <Icon className={styles.icon}/>
        </OpeningHours>
    </div>
)