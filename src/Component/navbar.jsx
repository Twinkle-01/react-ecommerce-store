import { useContext } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/globalContext";

const Navbar = () => {
  const {user} = useContext(GlobalContext)
  const navigate = useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault()
    // console.log("Search", e.target[0].value)
    if(e.target[0].value){
      navigate(`/search/${e.target[0].value}`)
    }
  }
  return (
    <nav className="flex gap-8 items-center justify-between px-4 pt-4 font-[poppins]">
      <div className="flex gap-[190px] items-center">
        <h2 className="items-center font-bold">Exclusive</h2>
        {/* Links */}
        <div className="flex gap-12 items-center">
          <Link to="/" className="font-[Poppins] hover:underline no-underline">Home</Link>
          <Link to="#" className="font-[Poppins] hover:underline no-underline">Contact</Link>
          <Link to="#" className="font-[Poppins] hover:underline no-underline">About</Link>
          {
           !user &&  <Link to="/register" className="font-[Poppins] hover:underline no-underline">Sign Up</Link>
          }
        </div>
      </div>
      <div className="flex gap-6 items-center ">
        <form onSubmit={handlesubmit} className="flex items-center gap-2 bg-gray-200 font text-sm  py-2 rounded px-3 text-black">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none bg-gray-200"
          />
          <FiSearch />
        </form>
        <div className="flex gap-4">
          <FaRegHeart />
          <GrCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;