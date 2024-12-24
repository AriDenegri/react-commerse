import ItemCount from "./ItemCount"
import StarRatings from 'react-star-ratings';
import Card from 'react-bootstrap/Card';
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
            <ul>
                    <li><Card.Text>Categorias: {item.categoria}</Card.Text></li>
                    <li><Card.Text>HP: {item.caballos_de_fuerza}</Card.Text></li>
                    <li><Card.Text>Peso: {item.peso}Kg</Card.Text></li>
                    <li><Card.Text>Traccion: {item.traccion}</Card.Text></li>
                    <li><Card.Text>Asientos: {item.pasajeros}</Card.Text></li>

                    </ul>
            <p className="kilometraje">Kilometraje:<FormatedNumber number={item.kilometraje}/> KM</p>
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
                    <ItemCount item={item} />
            </div>
        </div>
        </>
    )
}

export default ItemDetail