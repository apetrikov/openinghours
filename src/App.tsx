import React from 'react';
import styles from './App.module.css';
import {Schedule} from './components'

// TODO this is only for dev, remove list import!
import items from "./components/Schedule/tests/input";

export function App() {
    return (
        <div className={styles.app}>
            <Schedule
                header="Opening hours"
                items={items}
            />
        </div>
    );
}