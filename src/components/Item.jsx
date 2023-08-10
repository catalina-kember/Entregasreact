import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardImg from "react-bootstrap/esm/CardImg"

export const MyCard = ({ product }) => (
	<Card key={product.id} style={{ width: "18rem", padding: "1rem" }}>
		
		<CardImg>
            variant="top"
            {product.img}
        </CardImg>

		<Card.Body>

			<Card.Title>
				{product.name_product} 
			</Card.Title>

			<Card.Text>Descrpition: {product.descrpition}</Card.Text>

			<Button variant="primary">Ver</Button>

		</Card.Body>
		
	</Card>
)