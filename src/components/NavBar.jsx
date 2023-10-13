import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardWidget from "./CardWidget"; 
import { Link,  useParams } from 'react-router-dom'; 
import { Navbar } from 'react-bootstrap';


export const NavBar = () => (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/descripcion/Remeras">Remeras</Nav.Link>
                    <Nav.Link as={Link} to="/descripcion/Vestidos">Vestidos</Nav.Link>
                    <Nav.Link as={Link} to="/descripcion/Abrigo">Abrigo</Nav.Link>
                </Nav>
                <CardWidget />
            </Container>
        </Navbar>

    </>
);



