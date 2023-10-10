import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ product }) => (
	<Card style={{ width: "18rem", padding: "1rem" }}>
		<Card.Img
			style={{ height: "250px" }}
			variant="top"
			src={product.imagen}
		/>
		<Card.Body>
			<Card.Title>{product.nombre}</Card.Title>
			<Card.Text>Descripción: {product.descripcion}</Card.Text> {/* Corrige la propiedad "descripcion" */}
			<Card.Text>Precio: ${product.precio}</Card.Text> {/* Agrega el signo "$" antes del precio */}
			<Card.Text>Stock: {product.stock}</Card.Text>
			<Link to={`/item/${product.id}`}>
				<Button variant="primary">Ver</Button> {/* Cambia "ver" a "Ver" */}
			</Link>
		</Card.Body>
	</Card>
);
