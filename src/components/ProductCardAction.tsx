import { Button } from "./ui/button";

interface ProductCardActionProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const ProductCardAction = ({ open, setOpen }: ProductCardActionProps) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <Button className="flex-1" onClick={() => setOpen(!open)}>
        Edit
      </Button>
      <Button className="flex-1" variant={"destructive"}>
        Destroy
      </Button>
    </div>
  );
};

export default ProductCardAction;
