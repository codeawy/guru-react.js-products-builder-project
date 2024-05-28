import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { productFormSchema } from "@/validation/product";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

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
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    // Todo: check on default values
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      imgURL: "",
    },
  });

  console.log(form.formState.errors);

  const onSubmit = (values: z.infer<typeof productFormSchema>) => {
    console.log(values);
    return;
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2 py-4">
              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="imgURL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified category to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">Clothes</SelectItem>
                        <SelectItem value="m@google.com">
                          Electronics
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
              <Button>Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
