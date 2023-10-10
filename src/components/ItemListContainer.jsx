import { Container } from "react-bootstrap";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const productCollection = collection(db, "productos");
                const querySnapshot = await getDocs(productCollection);

                if (querySnapshot.empty) {
                    console.log("Sin resultados");
                } else {
                    const productList = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setProducts(productList);
                }
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Container>
            <section className="contenedor-header">
                <div className="header-titulos">
                    <h1 className="titulo-header" data-aos="zoom-in-left">
                        MERAKI
                    </h1>
                    <h2 className="subtitulo-header" data-aos="zoom-in-left">
                        DECORACION PARA EL HOGAR
                    </h2>
                </div>
            </section>
            <h1 className="greeting">{props.greeting}</h1>
            <div className="divTargets">
                <ItemList products={products} />
            </div>
        </Container>
    );
};

