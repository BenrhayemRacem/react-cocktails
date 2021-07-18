import {Col, Image,Button} from "react-bootstrap";
import {Link} from "react-router-dom";



const CocktailItem = (props)=> {
    const {id, name , image , alcoholic, category, glass} = props.cocktail;
    return (

            <Col xs={12} md={6} lg={4}>
                <h2> {name}</h2>
                <Image src={image} alt={name} rounded/>

                <h3>{alcoholic}</h3>
                <h4>{category}</h4>
                <div>{glass}</div>
                <Button variant="primary"> <Link to={`cocktail/${id}`}>  show more infos</Link> </Button>
            </Col>


    )
}

export default CocktailItem;