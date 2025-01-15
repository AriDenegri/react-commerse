import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { getItems, getItemsByCategory } from "../firebase/db";

function ItemListContainer() {
  const { categoria } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoria) {
      getItemsByCategory(categoria)
      .then(res => setItems(res))
    } else {
      getItems().then(res => setItems(res))
    }

    setLoading(true);
    getItems()
      .then((res) => {
        const filteredItems = categoria
          ? res.filter((item) => item.categoria === categoria)
          : res;
        setItems(filteredItems);
      })
      .catch((error) => console.error("Error fetching items:", error))
      .finally(() => setLoading(false));
  }, [categoria]);

  return (
    <div>
      {loading ? (
        <p className="loading">Cargando Flota...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
