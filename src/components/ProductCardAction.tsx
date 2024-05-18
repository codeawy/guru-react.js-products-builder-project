import { Product } from "@/interfaces";
import { Button } from "./ui/button";

interface ProductCardActionProps {
  product: Product;
  open: boolean;
  productIdx: number;
  setOpen: (value: boolean) => void;
  setSelectedProduct: (product: Product) => void;
  setSelectedProductIdx: (idx: number) => void;
  setOpenDestroyDialog: (value: boolean) => void;
}

const ProductCardAction = ({
  product,
  open,
  setOpen,
  productIdx,
  setSelectedProduct,
  setSelectedProductIdx,
  setOpenDestroyDialog,
}: ProductCardActionProps) => {
  const onEdit = () => {
    setSelectedProduct(product);
    setOpen(!open);
    // ** Set index
    setSelectedProductIdx(productIdx);
  };

  const onDestroy = () => {
    setSelectedProductIdx(productIdx);
    setOpenDestroyDialog(true);
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <Button className="flex-1" onClick={onEdit}>
        Edit
      </Button>
      <Button className="flex-1" variant={"destructive"} onClick={onDestroy}>
        Destroy
      </Button>
    </div>
  );
};

export default ProductCardAction;
