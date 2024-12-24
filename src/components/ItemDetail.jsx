import ItemCount from "./ItemCount"
import StarRatings from 'react-star-ratings';
import Card from 'react-bootstrap/Card';
import FormatedNumber from './FormatedNumber';
import { IconButton } from "@mui/material";
import Swal from 'sweetalert2'



function ItemDetail({item}) {
    const infoCategoria = () => {
        Swal.fire({
            title: "Categoria",
            text: "En nuestra empresa, utilizamos el término categoría para clasificar los vehículos según sus características principales y su uso previsto. Esto nos permite ofrecer una mejor experiencia al cliente al facilitar la identificación del tipo de vehículo que mejor se adapta a sus necesidades, ya sea un Deportivo o Compacto para uso urbano, un Hibrido para quienes buscan economizar, un Clasico para aventuras familiares o un vehiculo de Carreras para quienes buscan emociones fuertes.",
            icon: "info"
          });
    }
    const infoHp = () => {
        Swal.fire({
            title: "HorsePower o Caballos de Fuerza",
            text: "Es una medida de la potencia del motor. Cuanto mayor sea el número de HP, más fuerte será el motor y mejor será el desempeño en términos de aceleración y velocidad.",
            icon: "info"
          });
    }
    const infoPeso = () => {
        Swal.fire({
            title: "Peso",
            text: "Indica la masa total del vehículo, generalmente expresada en kilogramos (kg). El peso afecta el consumo de combustible, la maniobrabilidad y la estabilidad del auto.",
            icon: "info"
          });
    }
    const infoTraccion = () => {
        Swal.fire({
            title: "Traccion",
            text: "Define cómo se distribuye la potencia del motor a las ruedas. Las opciones comunes incluyen tracción delantera (FWD), trasera (RWD), en las cuatro ruedas (AWD)",
            icon: "info"
          });
    }
    const infoAsientos = () => {
        Swal.fire({
            title: "Asientos",
            text: "Indica la capacidad máxima de ocupantes que el vehículo puede transportar de manera segura, incluyendo al conductor.",
            icon: "info"
          });
    }

    return (
        <>
        <div className="imageContainer">
            <img src={item.imagen} alt={`${item.marca} ${item.modelo}`} className="image" />
        </div>
        <div className="details">
            <h1>{item.marca} {item.modelo}</h1>
            <p>{item.descripcion}</p>
            <ul>
                    <li>
                        <Card.Text>Categorias: {item.categoria} 
                            <IconButton onClick={infoCategoria} aria-label="Icon" color="secondary" className="more-container" >
                                <img src="../public/logos/agregar.png" className="more-icon" />
                            </IconButton>
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>HP: {item.caballos_de_fuerza}
                            <IconButton onClick={infoHp} aria-label="Icon" color="secondary" className="more-container" >
                                <img src="../public/logos/agregar.png" className="more-icon" />
                            </IconButton>    
                        </Card.Text></li>
                    <li>
                        <Card.Text>Peso: {item.peso}Kg
                            <IconButton onClick={infoPeso} aria-label="Icon" color="secondary" className="more-container" >
                                <img src="../public/logos/agregar.png" className="more-icon" />
                            </IconButton>
                        </Card.Text></li>
                    <li>
                        <Card.Text>Traccion: {item.traccion}
                            <IconButton onClick={infoTraccion} aria-label="Icon" color="secondary" className="more-container" >
                                <img src="../public/logos/agregar.png" className="more-icon" />
                            </IconButton>    
                        </Card.Text></li>
                    <li>
                        <Card.Text>Asientos: {item.pasajeros}
                            <IconButton onClick={infoAsientos} aria-label="Icon" color="secondary" className="more-container" >
                                <img src="../public/logos/agregar.png" className="more-icon" />
                            </IconButton>    
                        </Card.Text></li>

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