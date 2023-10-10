import { Item } from "./Item";

export const ItemList = ({ products }) => (
    <div>
        {products.map((product) => (
            <Item key={product.id} product={product} />
        ))}
    </div>
);
