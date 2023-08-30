import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"


export const Item = ({ product }) => (
	<Card  style={{ width: "18rem", padding: "1rem" }}>
		<Card.Img
			style={{ height: "250px" } }
			variant="top"
			src={product.img}
		/>
		<Card.Body>
			<Card.Title>{product.name_product}</Card.Title>
			<Card.Text>
				Descrpicion:{product.descrpition}
			</Card.Text>
			<Link to={`/item/${product.id}`}>
				<Button variant="primary">ver</Button>
			</Link>
		</Card.Body>
	</Card>
);