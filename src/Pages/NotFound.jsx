import { Link } from "react-router-dom";
import Navbar from "../Component/navbar";
const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="breadcrumbs text-sm px-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#a0a0a0]">404 ERROR</li>
        </ul>
      </div>


      <div className="text-center justify-center items-center flex flex-col h-[80vh] w-full">
        <h1 className="text-[110px] font-medium">404 Not Found</h1>
        <p>Your Visited page not Found,visit home page</p>
      </div>
    </div>
  );
};

export default NotFound;
