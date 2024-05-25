import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Product } from "@/interfaces";
import { fakeProductList } from "@/lib/fakeData";
import { useState } from "react";
import ProductCard from "./ProductCard";
import EditProductDialog from "./dialogs/EditProductDialog";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import AddProductDialog from "./dialogs/AddProductDialog";

const ProductCardList = () => {
  const { toast } = useToast();
  const [productList, setProductList] = useState<Product[]>(fakeProductList);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDestroyDialog, setOpenDestroyDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: "",
    title: "",
    description: "",
    price: 0,
    category: "",
  });
  const [selectedProductIdx, setSelectedProductIdx] = useState<number>(-1);

  const onDestroy = () => {
    // ** 1.Access the selected product
    const filteredProducts = productList.filter(
      (product) => product.id !== productList[selectedProductIdx]["id"],
    );
    // ** 2.Update the product list
    setProductList(filteredProducts);
    // ** 3.Close the dialog
    setOpenDestroyDialog(false);
    // ** 4. Go back to the init state (selectedProductIdx)
    setSelectedProductIdx(-1);
    // ** 5. Show a toast
    toast({
      title: "Product Deleted",
      description: "Your product has been deleted",
      duration: 5000,
      variant: "destructive",
    });
  };

  return (
    <div className="my-10">
      <Button className="mb-5" onClick={() => setOpenAddDialog(true)}>
        Add a new
      </Button>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productList.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            open={openEditDialog}
            setOpen={setOpenEditDialog}
            setSelectedProduct={setSelectedProduct}
            productIdx={idx}
            setSelectedProductIdx={setSelectedProductIdx}
            openDestroyDialog={openDestroyDialog}
            setOpenDestroyDialog={setOpenDestroyDialog}
          />
        ))}
      </div>

      <AddProductDialog
        open={openAddDialog}
        setOpen={setOpenAddDialog}
        productList={productList}
        setProductList={setProductList}
      />

      <EditProductDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        productList={productList}
        setProductList={setProductList}
        selectedProductIdx={selectedProductIdx}
      />

      <AlertDialog open={openDestroyDialog} onOpenChange={setOpenDestroyDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure?
              {selectedProduct.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button onClick={onDestroy} variant={"destructive"}>
              Destroy
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductCardList;
