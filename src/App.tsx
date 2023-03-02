import React from 'react';
import './App.css';
import { Schedule } from './components'

import list from "./components/OpeningHours/input";

export function App() {
  // TODO this is only for dev, remove list import!
  return (
    <div className="app">
      <Schedule
        header="Opening hours"
        list={list}
      />
    </div>
  );
}