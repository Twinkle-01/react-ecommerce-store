import { useParams } from "react-router-dom";
import Navbar from "../Component/navbar";
import ListProduct from "../Component/listProduct";

const SearchProduct = () => {
    const {query} = useParams()

    return ( 
        <div>
          <Navbar/>
          <ListProduct tag={"Search"} title={query} url={`https://dummyjson.com/products/search?q=${query}`}/>  
        </div>
     );
}
 
export default SearchProduct;