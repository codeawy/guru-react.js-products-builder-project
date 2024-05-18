import { Product } from "@/interfaces";
import { Button } from "./ui/button";

interface ProductCardActionProps {
  product: Product;
  open: boolean;
  productIdx: number;
  setOpen: (value: boolean) => void;
  setSelectedProduct: (product: Product) => void;
  setSelectedProductIdx: (idx: number) => void;
}

const ProductCardAction = ({
  product,
  open,
  setOpen,
  productIdx,
  setSelectedProduct,
  setSelectedProductIdx,
}: ProductCardActionProps) => {
  const onEdit = () => {
    setSelectedProduct(product);
    setOpen(!open);
    // ** Set index
    setSelectedProductIdx(productIdx);
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <Button className="flex-1" onClick={onEdit}>
        Edit
      </Button>
      <Button className="flex-1" variant={"destructive"}>
        Destroy
      </Button>
    </div>
  );
};

export default ProductCardAction;
