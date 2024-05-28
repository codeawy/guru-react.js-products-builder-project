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
import ColorCircle from "../ColorCircle";
import { COLORS } from "@/constants/color";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedProduct: Product;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
  productList: Product[];
  setProductList: (productList: Product[]) => void;
  selectedProductIdx: number;
  tempSelectedColors: string[];
  setTempSelectedColor: React.Dispatch<React.SetStateAction<string[]>>;
}

const EditProductDialog = ({
  open,
  setOpen,
  selectedProduct,
  setSelectedProduct,
  productList,
  setProductList,
  selectedProductIdx,
  tempSelectedColors,
  setTempSelectedColor,
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

          <div>
            <Label>Standard Colors:</Label>
            <div className="flex items-center space-x-2">
              {COLORS.map((color) => (
                <span
                  key={color}
                  style={{ backgroundColor: color }}
                  className="cursor-pointer rounded-sm p-1 text-xs"
                  onClick={() => {
                    // ** 1.Check if color exits on selectedColor state
                    if (selectedProduct.colors.includes(color)) {
                      return;
                    }
                    setSelectedProduct((prev) => {
                      return {
                        ...prev,
                        colors: [...prev.colors, color],
                      };
                    });
                  }}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Colors</Label>
            <div className="flex flex-wrap items-center space-x-2">
              {selectedProduct.colors.map((color, idx) => (
                <ColorCircle
                  key={idx}
                  color={color}
                  onClick={() => {
                    // ** Check if color exists, filter it out
                    if (tempSelectedColors.includes(color)) {
                      setTempSelectedColor((prev) =>
                        prev.filter((item) => item !== color),
                      );
                      return;
                    }
                    setTempSelectedColor((prev) => [...prev, color]);
                  }}
                />
              ))}
            </div>
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
