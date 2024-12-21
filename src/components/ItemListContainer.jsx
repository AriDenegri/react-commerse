import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoria } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/Items.json")
        .then((res) => res.json())
        .then((data) => {
          const filteredItems = categoria
            ? data.filter((item) => item.categoria === categoria)
            : data;
          setItems(filteredItems);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, 500);
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