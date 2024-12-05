import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';

function ItemList({items}) {
    return(
<Container>
      <Row>
        {items.map(item => (
            <Item item={item}/>
        ))}
      </Row>
    </Container>
    )
}

export default ItemList