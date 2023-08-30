import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CardWidget } from "./CartWidget";


export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/descrpition/Remeras">Remeras</Nav.Link>
                <Nav.Link href="/descrpition/Vestidos">Vestidos</Nav.Link>
                <Nav.Link href="/descrpition/Abrigo">Abrigo</Nav.Link>
            </Nav>
            <CardWidget />
        </Container>
    </Navbar>
);

