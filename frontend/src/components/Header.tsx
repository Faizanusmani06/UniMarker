import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="bg-[#C6483C] py-6 -mb-1 overflow-x-clip">
      <div className="p-5 md:container mx-auto flex justify-between">
        <span className="text-2xl md:text-3xl text-[#F9F9F8] font-bold tracking-tight mr-5 md:px-1 md:shadow-md ">
          <Link to="/" className="flex gap-0 md:gap-3 ">
            {/* <img src="/hotel.png" alt="logo" className = "h-[80px] md:h-[60px] lg:h-[40px] object-cover"/> */}
            <p className="text-white text-5xl">UniMarker</p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
