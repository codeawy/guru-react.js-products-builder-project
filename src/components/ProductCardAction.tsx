import { Product } from "@/interfaces";
import { Button } from "./ui/button";

interface ProductCardActionProps {
  product: Product;
  open: boolean;
  setOpen: (value: boolean) => void;
  setSelectedProduct: (product: Product) => void;
}

const ProductCardAction = ({
  product,
  open,
  setOpen,
  setSelectedProduct,
}: ProductCardActionProps) => {
  const onEdit = () => {
    // ** 1.Store the product data to a state
    console.log(product);
    setSelectedProduct(product);
    // ** 2.open the edit dialog
    setOpen(!open);
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
