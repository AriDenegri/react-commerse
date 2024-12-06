import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('./src/Items.json')
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? <p className="loading">Obteniendo listado de la flota...</p> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;