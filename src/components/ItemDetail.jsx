import {useContext} from "react";
import { ItemCount } from "./ItemCount";
import { CardContext } from "../contexts/CardContex";


export const ItemDetail = ({ product }) => {
    const {addItem} = useContext (CardContext)
    const onAdd = (count) => addItem(product, count)

    return (
        <div className="divTargetsItem">
            <img className="imgDivTargets" src={product.imagen}></img>
            <h1 className="titleDivTargets">{product.nombre}{onAdd}</h1>
            <div>
                <h3 className="stockDivTargets">descripcion: {product.descripcion}</h3>
            </div>
            <div>
                <h3 className="stockDivTargets">stock disponible: {product.stock}</h3>
            </div>
            <div>
                <h3 className="precioDivTargets">precio: {product.precio}</h3>
            </div>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    );
}
