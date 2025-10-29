import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-3 pb-5 mt-10 md:mt-20">
      <div className="container mx-auto max-w-screen-2xl py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
        {/* Logo and details */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 hover:text-orange-400">
            <Link to="/">FurniEnd</Link>
          </h2>
          <p className="text-gray-600 text-[14px]">
            The advantage of hiring a workspace with us is that <br />
            it gives you comfortable service <br />
            and all-around facilities and more things.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-400">
            Services
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-400 text-gray-700">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-400 text-gray-700">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-400 text-gray-700">
                Branding Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-400">
            Furniture
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-400 text-gray-700">
                Bed
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-400 text-gray-700">
                Sofa
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-400 text-gray-700">
                All
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-orange-400">
            Follow Us
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-orange-400 text-gray-700 flex items-center space-x-2"
              >
                <FaFacebook /> <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-orange-400 text-gray-700 flex items-center space-x-2"
              >
                <FaTwitter /> <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-orange-400 text-gray-700 flex items-center space-x-2"
              >
                <FaInstagram /> <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="mt-12 container mx-auto max-w-screen-2xl py-6 px-4 flex flex-col  sm:flex-row justify-between sm:items-center gap-4 text-left border-t border-gray-300 pt-4">
        <div>
          <p className="text-gray-900">
            Copyright &copy; {new Date().getFullYear()} FurniEnd. All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-orange-400 text-gray-700">
            Terms & Conditions
          </Link>
          <Link to="/" className="hover:text-orange-400 text-gray-700">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
