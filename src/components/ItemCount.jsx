import { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FormatedNumber from './FormatedNumber';
import { CartContext } from '../context/CartContext';

function getCartItemIds(cartItems) {
  return cartItems.map(item => item.id);
}

function ItemCount({ item }) {
  const states = ["Tanque Vacío", "1/4 de Tanque", "Mitad de Tanque", "3/4 de Tanque", "Tanque Lleno"];
  const [index, setIndex] = useState(0);
  const [precioModificado, setPrecioModificado] = useState(item.precio);
  const { addToCart, cart } = useContext(CartContext);

  // Mapa  del porcentaje de incremento de precio según el combustible
  const precioPorcentaje = {
    "Tanque Vacío": 0,
    "1/4 de Tanque": 0.001,
    "Mitad de Tanque": 0.002, 
    "3/4 de Tanque": 0.003,
    "Tanque Lleno": 0.009 
  };

  // Actualiza el precio cuando cambie la selección de combustible
  useEffect(() => {
    const incremento = precioPorcentaje[states[index]];
    const precioConIncremento = item.precio + (item.precio * incremento);
    setPrecioModificado(precioConIncremento);
  }, [index, item.precio, states]);

  const handleAddToCart = () => {
    addToCart({ ...item, combustible: states[index], precio: precioModificado });
  };

  const handleAdd = () => {
    if (index < states.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleRestart = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const cartItemIds = getCartItemIds(cart);

  return (
    <div className="counter">
      <Button onClick={handleAddToCart} className="button" variant="primary" disabled={cartItemIds.includes(item.id)}>
        Adquirir por: ${<FormatedNumber number={precioModificado} />}
      </Button>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRestart}>-</button>
      <p>Recibir con: {states[index]}</p>
    </div>
  );
}

export default ItemCount;
