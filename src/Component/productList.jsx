import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "./common/productCard";
import UseFetch from "./hooks/useFetch";
import ListProduct from "./listProduct";

const ProductList = () => {
  const testObj = {};

  return (
    <div>
      <ListProduct
        url={"https://dummyjson.com/products?limit=10"}
        tag={"Todays"}
        title={"Flash Sales"}
      />

      <ListProduct
        url={"https://dummyjson.com/products/category/smartphones"}
        // tag={"Todays"}
        title={"Smartphones"}
      />

      <ListProduct
        url={"https://dummyjson.com/products/category/tops"}
        // tag={"Todays"}
        title={"tops"}
      />

      <ListProduct
        url={"https://dummyjson.com/products/category/womens-shoes"}
        // tag={"Todays"}
        title={"Womens-shoes"}
      />
    </div>
  );
};

export default ProductList;
