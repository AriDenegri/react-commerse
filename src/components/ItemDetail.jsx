import ItemCount from "./ItemCount"
import StarRatings from 'react-star-ratings';
import Button from 'react-bootstrap/Button';
import FormatedNumber from './FormatedNumber';

function ItemDetail({item}) {
    return (
        <>
        <div className="imageContainer">
            <img src={item.imagen} alt={`${item.marca} ${item.modelo}`} className="image" />
        </div>
        <div className="details">
            <h1>{item.marca} {item.modelo}</h1>
            <p>{item.descripcion}</p>
            <div className='stars' >
                        <StarRatings
                            rating={item.calificacion}
                            starRatedColor="#ffac04"
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="5px"
                            />
            </div>
            <div className='d-flex justify-content-center details-buy'>
                    <Button className='button' variant="primary">Reservar por ${<FormatedNumber number={item.precio_por_dia} />}</Button>
                    <ItemCount />
            </div>
        </div>
        </>
    )
}

export default ItemDetail