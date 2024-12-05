import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar className="bg-dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className='brand'>
          <img
            alt=""
            src="./src/assets/logos/logo.png"
            width="90"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          CarLink
        </Navbar.Brand>
        
        {/* Centrar el list-container en la barra de navegación */}
        <div className="list-container">
          <ul className="navbar-list">
            <li><a>Rapidez</a></li>
            <li><a>Cargamento</a></li>
            <li><a>Economico</a></li>
            <li><a>Comodidad</a></li>
          </ul>
        </div>
        
        <div className="navbar-cart">
          <CartWidget number={1} />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;