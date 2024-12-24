import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';
import FormatedNumber from './FormatedNumber';

function Item({item}) {
    return (
<Col>
    <Card className='card' style={{ width: '18rem', position: 'relative'}}>
                <div className="image-container">
                    <Card.Img variant="top" src={item.imagen} />
                    <img className="logo-overlay" src={item.logo} alt="Logo" id={item.marca} />
                </div>
                <Card.Body>
                    <ul>
                    <Card.Title>{item.marca} {item.modelo}</Card.Title>
                    <li><Card.Text>Categorias: {item.categoria}</Card.Text></li>
                    <li><Card.Text className='counter'>Kilometraje:<FormatedNumber number={item.kilometraje}/> KM</Card.Text></li>
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
                        <Button as={Link} to={`/item/${item.id}`} className='button' variant="primary">Ver Más Detalles</Button>
                    </div>
                </Card.Body>
                </Card>
</Col>

    )
    
}

export default Item