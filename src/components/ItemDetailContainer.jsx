import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/Items.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedItem = data.find((car) => car.id === parseInt(id));
        setItem(selectedItem);
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, [id]);

  if (!item) {
    return <p>Cargando...</p>;
  }

  return (
      <div className="item-detail-container">
        <ItemDetail item={item}/>
      </div>
  );
}

export default ItemDetailContainer;