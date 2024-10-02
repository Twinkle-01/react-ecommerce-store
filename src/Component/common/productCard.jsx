import { BiHeart } from "react-icons/bi";
import { BsEye, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const arr = Array(Math.floor(product.rating));
  return (
    <div>
      <Link to={"/productDetails/" + product.id}>
        <div className="min-w-[270px] relative flex flex-col gap-4">
          <img
            src={product.images[0]}
            alt={product.title}
            className="bg-[#f5f5f5] h-[270px] w-full object-contain"
          />
          <div className="w-[55px] h-[26px] bg-[#db4444] rounded-[4px] text-white flex items-center justify-center absolute top-3 left-3">
            40%
          </div>
          <div className="flex flex-col gap-2 absolute top-3 right-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <BiHeart />
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <BsEye />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">{product.title}</h3>
            <div className="flex gap-3">
              <p className="text-[#DB4444] font-medium">
                ${product.discountPercentage}
              </p>
              <s className="text-[#a0a0a0] font-medium">${product.price}</s>
            </div>
            <div className="flex items-center gap-1">
              {[...arr].map((_, i) => {
                return <BsStarFill fill="#ffad33" key={i} />;
              })}
              {/* <p>({product.reviews.length})</p> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;