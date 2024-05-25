import { v4 as uuid } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import ColorCircle from "../ColorCircle";
import { Label } from "../ui/label";
import { useState } from "react";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  productList: Product[];
  setProductList: (productList: Product[]) => void;
}

const formSchema = z.object({
  title: z
    .string()
    .min(15, "Title must be at least 15 characters.")
    .max(50, "Title must be at most 50 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(50, "Description must be at most 50 characters."),
  category: z.string({
    required_error: "Please select a category to display.",
  }),
  price: z.coerce.number().min(50),
  imgURL: z.string().url("Please, provide a valid image URL"),
});

const AddProductDialog = ({
  open,
  setOpen,
  productList,
  setProductList,
}: IProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      imgURL: "",
    },
  });
  const [tempSelectedColors, setTempSelectedColor] = useState<string[]>([]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setProductList([
      { id: uuid(), colors: ["red", "green", "yellow"], ...values },
      ...productList,
    ]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new product</DialogTitle>
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
              <div className="flex flex-wrap items-center space-x-2">
                {tempSelectedColors.map((color) => (
                  <span
                    className="inline-block text-xs"
                    style={{ backgroundColor: color }}
                  >
                    {color}
                  </span>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                <Label>Colors</Label>
                <div className="flex items-center space-x-2">
                  {["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"].map(
                    (color, idx) => (
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
                    ),
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button>Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
