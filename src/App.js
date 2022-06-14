import './App.css';
import TeamsDirectoryPage from './pages/TeamsDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'
import background from './app/assets/img/ice.jpg'
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundSize: 'cover', backgroundImage: `url(${background})` }} className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />          
        <Route path='directory' element={<TeamsDirectoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;