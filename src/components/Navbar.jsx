import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegTimesCircle } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-6">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-orange-400 font-bold" : "hover:text-orange-500"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((preState) => !preState);
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-6 px-4 container mx-auto max-w-screen-2xl">
        {/* logo */}
        <Link to="/" className="font-bold hover:text-orange-300">
          FurnitureEnd
        </Link>

        {/* hamburger menu for mobile device */}
        <div
          onClick={toggleMenu}
          className="md:hidden cursor-pointer hover:text-orange-300"
        >
          {isMenuOpen ? null : <GiHamburgerMenu />}
        </div>

        {/* desktop menu itmes  */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        {/* mobile menu items  */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <FaRegTimesCircle className="text-2xl" />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>

        {/* cart */}
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingCart className="text-2xl" />
          <sup
            className="absolute top-0 -right-3 bg-orange-300 text-white w-5 h-5
           rounded-full flex items-center justify-center text-xs"
          >
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
