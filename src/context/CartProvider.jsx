import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => setCart([...cart, item])
    
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
