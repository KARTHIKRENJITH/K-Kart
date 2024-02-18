import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBus } from "react-icons/fa";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
  
    <>
      <div className=" w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
         
            <h1 className='logo text-[25px] text-red-800'>
                 <strong>K</strong>KART</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to=""
             
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="/offers"
                  
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Products
                </Link>

              
              </div>

              
            </div>
            
            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="/addpro"
                  
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Add Products
                </Link>

              
              </div>

              
            </div>

            


          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/offers"
            
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Offers
          </Link>
          <Link
            to="/addpro"
            
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
        Add Products
          </Link>
          
      
         
         
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Navbar;
