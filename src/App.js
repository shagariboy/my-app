import React from 'react';

import GeneralInfo from './components/GeneralInfo';

import { Education } from './components/Education';

import { Work } from './components/Work';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>RESUME APP</h1>
      <GeneralInfo />
      <Education />
      <Work />
    </div>
  );
}

export default App;
