import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LordStanley from '../app/assets/img/Lord-Stanley.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='black' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={LordStanley} alt='lordstanley logo' className='float-start' />
                <h1 className='mt-4'>Hockey</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink style={{ color: "#1DA1F2" }} className='nav-link' to='/'>
                            <i style={{ color: "#1DA1F2" }} className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "#1DA1F2" }} className='nav-link' to='/directory'>
                            <i style={{ color: "#1DA1F2" }} className='fa fa-list fa-lg' /> Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "#1DA1F2" }} className='nav-link' to='/about'>
                            <i style={{ color: "#1DA1F2" }} className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "#1DA1F2" }} className='nav-link' to='/contact'>
                            <i style={{ color: "#1DA1F2" }} className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;