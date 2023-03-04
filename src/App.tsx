import React from 'react';
import styles from './App.module.css';
import {Schedule} from './components'
import {ReactComponent as Icon} from './styles/icons/ic-clock.svg'

// TODO this is only for dev, remove list import!
import items from "./components/Schedule/tests/input";

export function App() {
    return (
        <div className={styles.app}>
            <Schedule
                header="Opening hours"
                items={items}
            >
              <Icon className={styles.icon}/>
            </Schedule>
        </div>
    );
}