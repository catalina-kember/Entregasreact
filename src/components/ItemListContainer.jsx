import Container from "react-bootstrap/Container"
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


import { ItemList } from "./ItemList"


export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        const db = getFirestore();
        const refCollection = collection(db, "productos");
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("sin resultados")
            else
                setProducts(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                );

        })
            .finally(() => {
                setLoading(false)
            })
    }, []);
    if(loading) return <div>Cargando...</div>
    return (
        <Container>
            <section className="contenedor-header">
                <div className="header-titulos">
                    <h1 className="titulo-header" data-aos="zoom-in-left">MERAKI</h1>
                    <h2 className="subtitulo-header" data-aos="zoom-in-left">DECORACION PARA EL HOGAR</h2>
                </div>
            </section>
            <h1 className="greeting">{props.greeting}</h1>
            <div className="divTargets">
                <ItemList products={products}></ItemList>
            </div>
        </Container>
    );

};


