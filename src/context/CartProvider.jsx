import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => setCart([...cart, item])
    
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const getTotal = () => {
        const totalCompra = cart.reduce((total, e) => total + e.precio, 0);
        return totalCompra;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
