import './App.css';
import List from './pages/list-name';
import React from 'react';
import PersistentDrawerRight from './pages/navbar';

function App() {
  return (
    <div style={{ 
      backgroundColor: "#f8efed"
    }}>
      <PersistentDrawerRight />,
      <List />,
    </div>
  );
}

export default App;