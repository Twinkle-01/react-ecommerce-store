import { Link } from "react-router-dom";
import Slider from "./common/swiper";

const Banner = () => {
  const links = [
    { to: "/category/Home", label: "Home" },
    { to: "/category/Laptops", label: "Laptops" },
    { to: "/category/Beauty", label: "Beauty" },
    { to: "/category/Furniture", label: "Furniture" },
    { to: "/category/Groceries", label: "Groceries" },
    { to: "/category/Kitchen Accessories", label: "Kitchen Accessories" },
    { to: "/category/tops", label: "tops" },
    { to: "/category/skin-care", label: "skin-care" },
    { to: "/category/womens-shoes", label: "womens-shoes" },
    { to: "/category/womens-jewellery", label: "womens-jewellery"},
  ];
  return (
    <div className="flex px-4 pt-4 gap-3 h-[400px] items-center">
      <ul className="list-none flex flex-col gap-4 min-w-[200px]">
        {links.map((link, i) => {
          return (
            <li key={i} className="no-underline cursor-pointer">
              <Link to={link.to}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
      {/* Slider Component */}
        <Slider/>
    </div>
  );
};

export default Banner;