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
			<Card.Text>Descripción: {product.descripcion}</Card.Text> 
			<Card.Text>Precio: ${product.precio}</Card.Text>
			<Card.Text>Stock: {product.stock}</Card.Text>
			<Link to={`/item/${product.id}`}>
				<Button variant="primary">Ver</Button> 
			</Link>
		</Card.Body>
	</Card>
);
