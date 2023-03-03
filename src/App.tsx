import React, {ComponentProps} from 'react';
import './App.css';
import {Schedule} from './components'

// TODO this is only for dev, remove list import!
import list from "./components/Schedule/tests/input";

export function App() {
    return (
        <div className="app">
            <Schedule
              header="Opening hours"
              list={list}
            />
        </div>
    );
}