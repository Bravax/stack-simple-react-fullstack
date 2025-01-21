import React from 'react';
import '../styles/App.scss';
import NavBar from '../components/NavBar';

function App() {
  return (
    <main>
      <div className="garage">
        <header>
          <NavBar />
        </header>
      </div>
    </main>
  );
}

export default App;
