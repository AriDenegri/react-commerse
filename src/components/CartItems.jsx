import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import CartItem from './CartItem'

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
      <Button variant='success' className='w-50 mt-3'>Finalizar compra</Button>
    </div>
  )
}

export default CartItems;

  
