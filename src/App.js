import './App.css';
import TeamsDirectoryPage from './pages/TeamsDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'
import background from './app/assets/img/ice.jpg'


function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundSize: 'cover', backgroundImage: `url(${background})` }} className="App">
      <Header />
      <TeamsDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;