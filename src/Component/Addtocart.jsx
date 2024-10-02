import { useState } from "react";
import toast from "react-hot-toast";
import { BiHeart } from "react-icons/bi";
  
const AddToCart = () => {
    const [num,setNum] = useState(0)
    const add = () => {
        setNum(num + 1)
        toast.success("Product Added to Cart")
    }
    const subtract = () => {
    if(num > 0) {
        setNum(num - 1)
        toast.success(" Product removed from Cart")
    }else(
        toast.error("Product not in cart")
    )
    
    }

    const buy = () => {
        toast.success("Purchase Successfully")
    }
    return ( 
        <div className="flex items-center gap-4">
            {/* Increment */}
            <div className="flex items-center h-[44px] w-[159px] justify-between border border-black rounded-md">
                <button className=" w-[40px] h-full border-r border-black" onClick={subtract}>-</button>
                <div>{num}</div>
                <button className=" w-[40px] h-full border-l border-black bg-[#DB4444] text-white" onClick={add}>+</button>
            </div>
            {/* Button */}
            <button className="py-[10px] px-6 bg-[#DB4444] text-white rounded" onClick={buy}>Buy now</button>

            {/* Wishlist */}
            <div className="w-[40px] h-[40px] border-[#00000080] border flex justify-center items-center rounded cursor-pointer ">
                <BiHeart size={20}/>
            </div>
        </div>
     );
}
 
export default AddToCart;