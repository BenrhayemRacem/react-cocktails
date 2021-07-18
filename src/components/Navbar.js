import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const NavbarComponent = ()=> {


    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Cocktails Hotel</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/"> Home</Link>
                    <Link to="/about"> About</Link>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent ;