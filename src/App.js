import './App.css';
import TeamsList from './features/campsites/TeamsList.js';
import React from 'react';
import LordStanley from './app/assets/img/Lord-Stanley.png';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={LordStanley} alt='lordstanley logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <TeamsList />
    </div>
  );
}

export default App;