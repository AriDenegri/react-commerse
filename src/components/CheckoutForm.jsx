import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createOrder } from '../firebase/db';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';

function CheckoutForm ( ) {
    const { getTotal, cart } = useContext(CartContext)
    const handleSubmit = e => {
     e.preventDefault()
     const form = e.target
     const [email, name, phone] = form

     const order = {
        buyer: {name: name.value, email: email.value, phone: phone.value},
        total: getTotal(),
        items: cart,
        time: serverTimestamp()
     }

     createOrder(order);
}
  return (
    <Form className='container mt-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="name" placeholder="Introduzca su nombre completo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Introduzca su email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Numero de telefono</Form.Label>
        <Form.Control type="name" placeholder="Introduzca su numero" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Finalizar Pedido
      </Button>
    </Form>
  );
}

export default CheckoutForm;