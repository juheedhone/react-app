import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching Products in", category);
    setProduct(["clothing", "household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
