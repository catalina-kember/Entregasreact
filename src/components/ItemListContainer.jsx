import Container from "react-bootstrap/Container"

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import data from "../data/data.json";

import {ItemList} from "./ItemList"


export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const { id } = useParams();
    console.log(id)
    
    useEffect(() => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })
        
        promise.then(data =>{
            if(!id){
                setProducts(data)
            }else {
                const productsFiltered = data.filter(product=>product.description === id 
                );
                setProducts (productsFiltered);
            }
            
        })

        promise.catch(error => console.log(error))

    }, [])

    return (
        <Container>
            <h1>{props.greeting}</h1>
            <div className="divTargets">
                <ItemList products={products}></ItemList>
            </div>
        </Container>
    );

};