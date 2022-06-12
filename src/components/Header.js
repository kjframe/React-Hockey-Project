import { Navbar, NavbarBrand } from "reactstrap";
import LordStanley from '../app/assets/img/Lord-Stanley.png'

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={LordStanley} alt='lordstanley logo' />
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;