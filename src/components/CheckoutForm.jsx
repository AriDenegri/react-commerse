import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createOrder } from '../firebase/db';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';

function CheckoutForm() {
  const { getTotal, cart, clearCart } = useContext(CartContext);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    // Validación de campos vacíos
    if (!name || !email || !phone) {
      setError('Por favor, completa todos los campos antes de finalizar la compra.');
      return;
    }

    setError(''); // Limpiar errores previos si todo está bien

    const order = {
      buyer: { name, email, phone },
      total: getTotal(),
      items: cart,
      time: serverTimestamp(),
    };

    createOrder(order);
    clearCart();
  };

  return (
    <Form className="container mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" name="name" placeholder="Nombre/s Apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="emaildecontacto34@email.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Número de Teléfono</Form.Label>
        <Form.Control type="text" name="phone" placeholder="+54 1193456793" />
      </Form.Group>

      {error && <p className="text-danger">{error}</p>} {/* Mostrar mensaje de error */}

      <Button variant="primary" type="submit" disabled={cart.length < 1}>
        Finalizar Pedido
      </Button>
    </Form>
  );
}

export default CheckoutForm;
