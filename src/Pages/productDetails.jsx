import { Link, useParams } from "react-router-dom";
import UseFetch from "../Component/hooks/useFetch";
import Navbar from "../Component/navbar";
import { useState } from "react";
import AddToCart from "../Component/Addtocart";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    data: product,
  } = UseFetch("https://dummyjson.com/products/" + id);

  const [previewIndex, setPreviewIndex] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="px-4 pt-4">
        <div className="breadcrumbs text-sm ">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/category/" + product.category}>
                {product.category}
              </Link>
            </li>
            <li className="text-[#a0a0a0]">{product.title}</li>
          </ul>
        </div>
        {error && <p>Loading...</p>}
        {loading && <p>Loading...</p>}

        {/* make reusable component here */}
        {!loading && !error && (
          <div className="flex gap-[70px] items-center justify-center">
            {/* images */}
            <div className="grid-container">
              {product.images.map((_, i) => {
                return (
                  <img
                    src={product.images[i]}
                    onClick={() => {
                      setPreviewIndex(i);
                    }}
                    alt={product.title}
                    key={i}
                    className="object-contain w-[full] bg-[#F5F5F5] h-[140px] cursor-pointer rounded"
                  />
                );
              })}
              <img
                src={product.images[previewIndex]}
                alt=""
                className="object-contain w-full h-full bg-[#F5F5F5] rounded preview"
              />
            </div>

            {/* Details */}
            <div className="flex-col flex gap-[24px]">
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-[24px]">{product.title}</h2>
                <div className="flex gap-2 items-center">
                  <div>rating...</div>
                  <div className="text-[14px]">
                    ({product.reviews.length} Reviews)
                  </div>
                  <div className="text-[14px] text-[#00FF66] border-l border-black px-2">
                    In Stock
                  </div>
                </div>
                <h2 className="text-[24px]">
                  ${product.price.toLocaleString()}
                </h2>
              </div>
              <p>{product.description}</p>
              <hr className="text-[black]" />
              
              
              <div className="flex gap-4 items-center">
                <span>Colors:</span>
                <div className="flex gap-2 items-center">
                <div className="w-5 h-5 bg-[#A0BCE0] rounded-full border border-black"></div>
                <div className="w-5 h-5 bg-[#E07575] rounded-full "></div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div>Size:</div>
                <div className="flex gap-2 items-center">
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">XS</span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">S</span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">M</span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">L</span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">XL</span>
                </div>
              </div>

              <AddToCart/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
