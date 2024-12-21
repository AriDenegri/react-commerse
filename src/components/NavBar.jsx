import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import { Link } from 'react-router';

function NavBar() {
  return (
    <Navbar className="bg-dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to={"/"} className='brand'>
          <img
            alt=""
            src="/logos/logo.png"
            width="90"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          CarLink
        </Navbar.Brand>
  
        <div className="list-container">
          <ul className="navbar-list">
            <Link to={"/categoria/Rapidez"}>Rapidez</Link>
            <Link to={"/categoria/Cargamento"}>Cargamento</Link>
            <Link to={"/categoria/Economico"}>Economico</Link>
            <Link to={"/categoria/Comodidad"}>Comodidad</Link>
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