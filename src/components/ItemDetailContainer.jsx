import Container from "react-bootstrap/Container"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";



export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db=getFirestore();
        const refDoc = doc(db, "productos");
        getDoc(refDoc).then((snapshot)=>{
            setProduct({id:snapshot.id, ...snapshot.data()})
        }).finally (()=>setLoading(false))
    },[]);


    if(loading) return <div>Cargando...</div>
    
    return (
        <Container>
            <h1>Detalles</h1>
            <ItemDetail product={product}/>
        </Container>
    );

};