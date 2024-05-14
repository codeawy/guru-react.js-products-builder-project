import { fakeProductList } from "@/lib/fakeData";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {fakeProductList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
