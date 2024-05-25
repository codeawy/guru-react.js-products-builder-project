import { Product } from "@/interfaces";
import ProductCardAction from "./ProductCardAction";
import ColorCircle from "./ColorCircle";

interface ProductCard {
  product: Product;
  open: boolean;
  setOpen: (value: boolean) => void;
  productIdx: number;
  setSelectedProduct: (product: Product) => void;
  setSelectedProductIdx: (idx: number) => void;
  openDestroyDialog: boolean;
  setOpenDestroyDialog: (value: boolean) => void;
}

const ProductCard = ({
  product,
  open,
  setOpen,
  productIdx,
  setSelectedProduct,
  setSelectedProductIdx,
  setOpenDestroyDialog,
}: ProductCard) => {
  const { id, title, description, imgURL, price, category, colors } = product;

  return (
    <div key={id} className="space-y-3 rounded-lg border p-3 duration-500">
      <h4>{title}</h4>
      <img src={imgURL} className="rounded-md" />
      <p>{description}</p>
      <div className="flex items-center space-x-2">
        {colors.map((color, idx) => (
          <ColorCircle key={idx} color={color} />
        ))}
      </div>
      <div className="flex items-center justify-between gap-3">
        <span>{price}</span>
        <span>{category}</span>
      </div>

      <ProductCardAction
        open={open}
        setOpen={setOpen}
        product={product}
        productIdx={productIdx}
        setSelectedProduct={setSelectedProduct}
        setSelectedProductIdx={setSelectedProductIdx}
        setOpenDestroyDialog={setOpenDestroyDialog}
      />
    </div>
  );
};

export default ProductCard;
