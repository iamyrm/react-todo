import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <nav className="flex md:justify-between items-center justify-center gap-3 bg-[#201658] text-white w-full px-20 h-[3rem]"> */}
      <nav className="flex md:justify-between items-center justify-center gap-3 bg-violet-900 text-white w-full px-20 h-[3rem]">
        <div className="font-bold cursor-pointer text-xl">
          <span>Y TODO</span>
        </div>
        <ul className="flex gap-3">
          <li className="hover:scale-105 transition-transform hover:font-bold cursor-pointer">
            Home
          </li>
          <li className="hover:scale-105 transition-transform hover:font-bold cursor-pointer">
            About
          </li>
          <li className="hover:scale-105 transition-transform hover:font-bold cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
