import React from "react";
import { Link, NavLink } from "react-router";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-6">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-orange-300 font-bold" : "hover:text-orange-500"
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
  return (
    <header>
      <nav className="flex justify-between items-center py-6 px-4 container mx-auto max-w-screen-2xl">
        {/* logo */}
        <Link href="logo">logo</Link>
        {/* desktop menu itmes  */}
        <div>
          <NavItems />
        </div>
        {/* cart */}
        <div>cart</div>
      </nav>
    </header>
  );
};

export default Navbar;
