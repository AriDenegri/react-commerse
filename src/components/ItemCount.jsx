import { useState } from 'react';

function ItemCount() {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRestart = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='counter'>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRestart}>-</button>
        <button onClick={handleReset}>Reset</button>
        <p>{count}</p>
    </div>
  );
}

export default ItemCount;
