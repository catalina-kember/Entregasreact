export const ItemDetail = (product) => (
    <div className="divTargets">
                <h1>{product.name}</h1>
                <img src={product.img}></img>
                <div>{product.stock}</div>
    </div>
)