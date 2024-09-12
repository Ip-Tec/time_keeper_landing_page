import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">TimeKeeper</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#features" className="hover:text-gray-300">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
