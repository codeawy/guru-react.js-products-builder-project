import { fakeProductList } from "@/lib/fakeData";
import ProductCard from "./ProductCard";
import EditProductDialog from "./dialogs/EditProductDialog";
import { useState } from "react";
import { Product } from "@/interfaces";

const ProductCardList = () => {
  const [productList, setProductList] = useState<Product[]>(fakeProductList);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: "",
    title: "",
    description: "",
    price: 0,
  });
  const [selectedProductIdx, setSelectedProductIdx] = useState<number>(-1);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productList.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          open={open}
          setOpen={setOpen}
          setSelectedProduct={setSelectedProduct}
          productIdx={idx}
          setSelectedProductIdx={setSelectedProductIdx}
        />
      ))}

      <EditProductDialog
        open={open}
        setOpen={setOpen}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        productList={productList}
        setProductList={setProductList}
        selectedProductIdx={selectedProductIdx}
      />
    </div>
  );
};

export default ProductCardList;
