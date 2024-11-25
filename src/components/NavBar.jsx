import CartWidget from "./CartWidget"
function NavBar ({titulo, categoria1,categoria2,categoria3,categoria4, numeroCarrito}){
    return(
        <header>
            <nav className="navbar">
                <div className="navbar-title">
                    <h1>{titulo}</h1>
                </div>
            
                    <ul className="navbar-list">
                        <li><a>{categoria1}</a></li>
                        <li><a>{categoria2}</a></li>
                        <li><a>{categoria3}</a></li>
                        <li><a>{categoria4}</a></li>
                    </ul>

                    <div className="navbar-cart">
                    <CartWidget number={numeroCarrito}/>
                    </div>

            </nav>
        </header>
    )
}
export default NavBar




