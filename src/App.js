import './App.css';
import TeamsList from './features/teams/TeamsList.js';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'
import background from './app/assets/img/ice.jpg'


function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <Header />
      <TeamsList />
      <Footer />
    </div>
  );
}

export default App;