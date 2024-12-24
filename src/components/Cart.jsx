import CartItems from './CartItems';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart () { 
    const { cart } = useContext(CartContext);

    return (
        <div className='container mt-5'>
           <CartItems items={cart}/>
        </div>
    )
}

export default Cart;