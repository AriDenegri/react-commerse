import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import Col from 'react-bootstrap/Col';
import FormatedNumber from './FormatedNumber';
import { Link } from 'react-router';

function Item({item}) {
    return (
<Col>
    <Card className='card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body>
                    <ul>
                    <Card.Title>{item.marca} {item.modelo}</Card.Title>
                    <li><Card.Text>Categorias: {item.categoria}</Card.Text></li>
                    <li><Card.Text>HP: {item.caballos_de_fuerza}</Card.Text></li>
                    <li><Card.Text>Peso: {item.peso}Kg</Card.Text></li>
                    <li><Card.Text>Traccion: {item.traccion}</Card.Text></li>
                    <li><Card.Text>Asientos: {item.pasajeros}</Card.Text></li>

                    </ul>
                    <div className='stars' >
                        <StarRatings
                            rating={item.calificacion}
                            starRatedColor="#ffac04"
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="5px"
                            />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button as={Link} to={`/item/${item.id}`} className='button' variant="primary">Reservar por ${<FormatedNumber number={item.precio_por_dia} />}</Button>
                    </div>
                </Card.Body>
                </Card>
</Col>

    )
    
}

export default Item