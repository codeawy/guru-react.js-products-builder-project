import { fakeProductList } from "@/lib/fakeData";
import ProductCard from "./ProductCard";
import EditProductDialog from "./dialogs/EditProductDialog";
import { useState } from "react";
import { Product } from "@/interfaces";

const ProductCardList = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: "",
    title: "",
    description: "",
    price: 0,
  });

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {fakeProductList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          open={open}
          setOpen={setOpen}
          setSelectedProduct={setSelectedProduct}
        />
      ))}

      <EditProductDialog
        open={open}
        setOpen={setOpen}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default ProductCardList;
