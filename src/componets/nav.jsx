import { BsArchiveFill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between flex-nowrap w-full h-[70px]">
        <div className="w-[30%]">
          <h1 className="capitalize text-black-500  p-2 ml-2 text-2xl text-">
            Joota <span className="capitalize text-red-500"> Shop</span>
          </h1>
        </div>
          <div className=" w-[35%] flex justify-between   p-2 mr-7">
            <a href="/men" className="font-bold">Men</a>
            <a href="women" className="font-bold">Women</a>
            <a href="categories" className="font-bold">Categories</a>
            <a href="brands" className="font-bold">Brands</a>
          </div>
          
        
        <div className="  w-[30%] flex justify-end mr-7 mt-1  ">
            <div className="relative">
              <input
                className="  w-[135px] h-[33px] mt-1 px-7 rounded-3xl w-22 border-2 border-gray-300 placeholder:italic shadow-sm placeholder:text-sm"
                placeholder="Search..."
              />
              <div className="absolute top-3.5 left-[124px]  ">
              <CiSearch  className=""/>

              </div>
            </div>
            <div className=" w-[80px]  flex  justify-between p-3">
              <BsArchiveFill />
              <VscAccount />
            </div>
          </div>
      </div>
    </div>
  );
};
