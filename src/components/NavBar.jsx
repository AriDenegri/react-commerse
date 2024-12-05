import CartWidget from "./CartWidget"
function NavBar (){
    return(
        <header>
            <nav className="navbar">
                <div className="navbar-title">
                    <h1>CarLink</h1>
                </div>
            
                    <ul className="navbar-list">
                        <li><a>Rapidez</a></li>
                        <li><a>Cargamento</a></li>
                        <li><a>Economico</a></li>
                        <li><a>Comodidad</a></li>
                    </ul>

                    <div className="navbar-cart">
                    <CartWidget number= {1} />
                    </div>

            </nav>
        </header>
    )
}
export default NavBar
