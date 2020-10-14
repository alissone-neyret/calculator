import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Calculatrice</h1>
      </header>
      <section className="App__section">
        <Calculator />
      </section>
    </div>
  );
}

export default App;
