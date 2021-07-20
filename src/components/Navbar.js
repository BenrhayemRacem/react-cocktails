import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const NavbarComponent = ()=> {


    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link to="/"> Cocktails Hotel</Link>
                <Nav className="me-auto">
                    <Link to="/"> Home</Link>
                    <Link to="/about"> About</Link>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent ;