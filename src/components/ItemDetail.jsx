import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CardContext } from "../contexts/CardContex";

export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CardContext);

    const onAdd = (count) => {
        addItem(product, count);
    };

    return (
        <div className="divTargetsItem">
            <img className="imgDivTargets" src={product.imagen} alt={product.nombre} />
            <h1 className="titleDivTargets">{product.nombre}</h1>
            <div>
                <h3 className="infoDivTargets">Descripción: {product.descripcion}</h3>
            </div>
            <div>
                <h3 className="infoDivTargets">Stock disponible: {product.stock}</h3>
            </div>
            <div>
                <h3 className="infoDivTargets">Precio: ${product.precio}</h3>
            </div>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    );
};

