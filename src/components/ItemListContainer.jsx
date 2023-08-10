import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react";
import  data from "./data/data.json";

export const ItemListContainer = (props) =>{
    
    const [product, setProduct] = useState([])

	useEffect(() => {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve(data), 2000)
		})

		promise.then(data => setProduct(data))
        promise.catch(error => console.log(error))
    
	}, [])

    return (
        <Container>
            <h1>{props.greeting}</h1>
        </Container>
    );
    
};