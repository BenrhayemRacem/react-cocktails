import {Container, Row} from "react-bootstrap";
import InputComponent from "../components/InputComponent";
import CocktailsList from "../components/CocktailsList";


const HomePage = () => {
 return (
     <Container>
         <Row>
             <InputComponent/>
         </Row>
         <Row>
         <CocktailsList/>
     </Row>
     </Container>
 )




}
export default HomePage;