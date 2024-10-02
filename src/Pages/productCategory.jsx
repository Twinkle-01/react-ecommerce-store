import { useParams } from "react-router-dom";
import UseFetch from "../Component/hooks/useFetch";
import ProductCard from "../Component/common/productCard";
import Navbar from "../Component/navbar";
import ListProduct from "../Component/listProduct";

const ProductCategory = () => {
  const { title } = useParams();
 
  return (
    <div>
      <Navbar/>
    <ListProduct url={ `https://dummyjson.com/products/category/${title}`} tag={"Category"} title={title}/>
    </div>
  )
};

export default ProductCategory;
