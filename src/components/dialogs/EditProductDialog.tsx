import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Product } from "@/interfaces";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
  productList: Product[];
  setProductList: (productList: Product[]) => void;
  selectedProductIdx: number;
}

const EditProductDialog = ({
  open,
  setOpen,
  selectedProduct,
  setSelectedProduct,
  productList,
  setProductList,
  selectedProductIdx,
}: IProps) => {
  const onSaveChanges = () => {
    const updatedProductList = [...productList];
    updatedProductList[selectedProductIdx] = { ...selectedProduct };
    setProductList(updatedProductList);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <div className="gap-4 space-y-1">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              className="col-span-3"
              value={selectedProduct.title}
              onChange={(evt) =>
                setSelectedProduct({
                  ...selectedProduct,
                  title: evt.target.value,
                })
              }
            />
          </div>
          <div className="gap-4 space-y-1">
            <Label htmlFor="imageUrl" className="text-right">
              Image URL
            </Label>
            <Input id="imageUrl" name="imageUrl" className="col-span-3" />
          </div>
          <div className="gap-4 space-y-1">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              type="number"
              id="price"
              name="price"
              className="col-span-3"
            />
          </div>
          <div className="gap-4 space-y-1">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="gap-4 space-y-1">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSaveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
