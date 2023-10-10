import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Container } from "react-bootstrap"; 

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const db = getFirestore();
                const docRef = doc(db, "productos", id);
                const snapshot = await getDoc(docRef);

                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.log("No se encontró el producto.");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Cargando...</div>;

    return (
        <Container>
            <h1>Detalles</h1>
            {product && <ItemDetail product={product} />} 
        </Container>
    );
};
