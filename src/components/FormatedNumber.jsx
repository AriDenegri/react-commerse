import React from 'react';

const FormatedNumber = ({ number }) => {
  const formattedNumber = number.toLocaleString('es-AR');
  return <div>{formattedNumber}</div>;
};
// No se puede operar con estos numeros ya que son Strings
export default FormatedNumber;