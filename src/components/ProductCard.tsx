import { Product } from "@/interfaces";
import ProductCardAction from "./ProductCardAction";

interface IProductCard {
  product: Product;
}

const ProductCard = ({ product: { id, title, description } }: IProductCard) => {
  return (
    <div key={id} className="space-y-3 rounded-lg border p-3 duration-500">
      <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

      <h4>{title}</h4>
      <p>{description}</p>
      <div>
        <span>🟢</span>
        <span>🟢</span>
        <span>🟢</span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <span>500,000</span>
        <span>Cars</span>
      </div>

      <ProductCardAction />
    </div>
  );
};

export default ProductCard;
