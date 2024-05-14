import { fakeProductList } from "@/lib/fakeData";
import ProductCard from "./ProductCard";
import EditProductDialog from "./dialogs/EditProductDialog";
import { useState } from "react";

const ProductCardList = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {fakeProductList.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          open={open}
          setOpen={setOpen}
        />
      ))}

      <EditProductDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default ProductCardList;
