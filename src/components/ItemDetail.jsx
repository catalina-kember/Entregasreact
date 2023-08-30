export const ItemDetail =  ({product}) => (
    <div className="divTargetsItem">
                <h1 className="titleDivTargets">{product.name}</h1>
                <img className="imgDivTargets" src={product.img}></img>
                <div>
                    <h3 className="stockDivTargets">stock disponible: {product.stock}</h3>
                </div>
    </div>
)