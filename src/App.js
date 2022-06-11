import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import LordStanley from './app/assets/img/Lord-Stanley.png';

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
      I'm ready for hockey!
    </div>
  );
}

export default App;