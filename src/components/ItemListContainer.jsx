import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('./src/Products.json')
      .then(res => res.json())
      .then(res => setItems(res));
  }, []);

  return (
    <ItemList items={items}/>
  );
}

export default ItemListContainer;