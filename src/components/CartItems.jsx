import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import CartItem from './CartItem'
import { Link } from 'react-router';

function CartItems({ items }) {
  if (items.length === 0) {
    return (
      <div className='d-flex flex-column align-items-center mt-5'>
        <p>No hay productos en el carrito.</p>
        <Button variant='primary' className='w-50 mt-3'>Volver a la tienda</Button>
      </div>
    )
  }

  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <ListGroup className='w-100'>
        {items.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </ListGroup>
      <Link to={"/Checkout"} className='w-50 mt-3'><Button variant='success' >Finalizar compra</Button></Link>
    </div>
  )
}

export default CartItems;

  
