import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { CardWidget } from "../CartWidget";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'; // Importa BrowserRouter y otros componentes necesarios
import { Navbar } from 'react-bootstrap';

const Home = () => <div>¡Bienvenido a la página de inicio!</div>;
const ProductDescription = ({ match }) => <div>Descripción de {match.params.product}</div>;

export const NavBar = () => (
    <BrowserRouter> 
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/description/Remeras">Remeras</Nav.Link>
                    <Nav.Link as={Link} to="/description/Vestidos">Vestidos</Nav.Link>
                    <Nav.Link as={Link} to="/description/Abrigo">Abrigo</Nav.Link>
                </Nav>
                <CardWidget />
            </Container>
        </Navbar>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/description/:product" component={ProductDescription} />
        </Switch>
    </BrowserRouter>
);


