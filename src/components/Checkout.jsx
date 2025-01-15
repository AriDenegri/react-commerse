import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Checkout() {
  return (
    <Form className='container mt-5'>
      <Form.Group className="mb-3">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="name" placeholder="Introduzca su nombre completo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Introduzca su email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Numero de telefono</Form.Label>
        <Form.Control type="name" placeholder="Introduzca su numero" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Finalizar Pedido
      </Button>
    </Form>
  );
}

export default Checkout;