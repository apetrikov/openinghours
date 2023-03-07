import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import {OpeningHours} from './components'
import {ReactComponent as Icon} from './styles/icons/ic-clock.svg'
import {loadInput} from "./api/endpoint";

export const App = () => {
    const [state, setState] = useState<Input>()
    useEffect(() => {
        (async () => {
                const fetchedInput = await loadInput()
                if (fetchedInput) setState(fetchedInput)
            }
        )()
    }, [])
    return (
        <div className={styles.app}>
            <OpeningHours
                rawInput={state}
            >
                <Icon className={styles.icon}/>
            </OpeningHours
            >
        </div>
    )
}

//    {
//      "type": "open",
//      "value": 36000
//    }