import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../firebase/db";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
      getItem(id, setItem)
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