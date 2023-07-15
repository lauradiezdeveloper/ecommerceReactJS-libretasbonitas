import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({items}) => {
    return (
        <div className="item-list-container">
            {items.map((elementsItems) => {
                return <ProductCard key={elementsItems.id} element={elementsItems} />;
            })}
        </div>
    )
}

export default ItemList