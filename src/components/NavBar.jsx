import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardWidget from "./CardWidget"; 
import { Link, BrowserRouter, Route, Routes, useParams } from 'react-router-dom'; // Importa BrowserRouter y otros componentes necesarios
import { Navbar } from 'react-bootstrap';

const Home = () => <div>¡Bienvenido a la página de inicio!</div>;

const ProductDescription = () => {
    const { product } = useParams();
    return <div>Descripción de {product}</div>;
};

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



