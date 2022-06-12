import './App.css';
import TeamCard from './features/campsites/TeamCard.js';
import React from 'react';
import LordStanley from './app/assets/img/Lord-Stanley.png';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { TEAMS } from './app/shared/TEAMS';

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
      <TeamCard team={TEAMS[0]} />
    </div>
  );
}

export default App;