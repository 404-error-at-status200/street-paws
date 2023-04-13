import React from "react";

function Menu() {
  return (
    <div
      className={
        "fixed top-0 left-0 min-w-[60%] h-full border-r border-r-gray-900 bg-[#61b3ff] md:hidden transition-all ease-in-out duration-500 z-10"
      }
    >
      <h1 className="w-full text-3xl font-bold m-4">Street Paws</h1>
      <ul className="pt-4 uppercase">
        <li className="p-4 mx-4 border-b border-gray-600">Home</li>
        <li className="p-4 mx-4 border-b border-gray-600">Community</li>
        <li className="p-4 mx-4 border-b border-gray-600">Report</li>
      </ul>
    </div>
  );
}

export default Menu;
