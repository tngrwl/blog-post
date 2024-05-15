import React from 'react';
import Router from './Router';
import './App.css';
import Header from './Pages/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
    </div>
  );
}

export default App;
