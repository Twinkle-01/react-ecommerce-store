import Banner from "../Component/banner";
import ListProduct from "../Component/listProduct";
import Navbar from "../Component/navbar";
import ProductList from "../Component/productList";

const HomePage = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner/>
            <ProductList/>
        </div>
     );
}
 
export default HomePage;