import Container from "react-bootstrap/Container"
import { MyCard } from "./Item"

export const CardList = ({ product }) => (
	<Container className="d-flex flex-wrap mt-3">
		{product.length === 0 ? (
			<div>Cargando...</div>
		) : (
			product.map(product => <MyCard key={product.id} product={product} />)
		)}
	</Container>
)