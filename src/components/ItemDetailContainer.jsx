import Container from "react-bootstrap/Container"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import data from "../data/data.json";


import { ItemDetail } from "./ItemDetail";



export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() =>{
                const productById = data.find(product => product.id === id)
                resolve(data.at(0))
            }, 2000)
        })

        promise.then(data => setProduct(data))
        promise.catch(error => console.log(error))
    }, [])

    if(!product) return <div>Cargando...</div>
    
    return (
        <Container>
            <h1>Detalles</h1>
            <ItemDetail product={product}/>
        </Container>
    );

};