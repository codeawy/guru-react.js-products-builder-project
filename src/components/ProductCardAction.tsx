import { Button } from "./ui/button";

const ProductCardAction = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <Button className="flex-1">Edit</Button>
      <Button className="flex-1" variant={"destructive"}>
        Destroy
      </Button>
    </div>
  );
};

export default ProductCardAction;
