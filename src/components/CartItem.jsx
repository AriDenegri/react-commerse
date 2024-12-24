import { useContext } from 'react'; 
import ListGroup from 'react-bootstrap/ListGroup'
import FormatedNumber from './FormatedNumber';
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';

function CartItem ({ item }) {
   const { removeFromCart } = useContext(CartContext);
    
    const handleRemoveFromCart = () => {
        removeFromCart(item.id)
    }
    return (
        <ListGroup.Item className='cart-container'>
        
        <div className='child cart-img'>
            <img src={item.imagen} 
            alt='image of car' 
            className="Image_car_cart"/>
        </div>
        <div className='child cart-info'>
            <p>
                {item.marca} {item.modelo}      ||Se entregará con: {item.combustible}.||

            </p>
        </div>
        <div className='child cart-price'>
            <p className='price'>
                $<FormatedNumber number={item.precio}/>
            </p>
        </div>
        <div className='child cart-delete'>
            <Button onClick={handleRemoveFromCart}>
                X
            </Button>
        </div>
         </ListGroup.Item>
    )
}

export default CartItem;
