import React from 'react';
import styles from './App.module.css';
import {Schedule} from './components'
import {ReactComponent as Icon} from './styles/icons/ic-clock.svg'

import input from './input/input.json'


import simulateEndpoint from "./api/endpoint";
import {convert} from "./helpers/converter";

const rawInput = simulateEndpoint(input)
const items: Item[] = rawInput ? convert(rawInput) : []
// ensure the type of input
// convert input
// pass as a prop
export function App() {
    return (
        <div className={styles.app}>
            <Schedule
                header="Opening hours"
                items={items || []}
            >
                <Icon className={styles.icon}/>
            </Schedule>
        </div>
    );
}