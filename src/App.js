import React from 'react'
import './app.css';
import Sidebar from './components/Sidebar'
import Suggestions from './components/Suggestions'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Suggestions />
    </div>
  );
}

export default App;
