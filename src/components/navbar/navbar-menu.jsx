import React from "react";

function Menu() {
  return (
    <div
      className={
        "absolute top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#61b3ff] md:hidden ease-in-out duration-500 z-10"
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