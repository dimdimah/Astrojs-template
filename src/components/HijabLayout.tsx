import Link from "next/link";
import React from "react";

export default function HijabLayout() {
  return (
    <div className="bg-[#fffffe]">
      <div className="left-0 flex flex-col w-64 h-full bg-white border-r">
        <div className="flex items-center justify-center border-b h-14">
          <div>Wardrobe Package</div>
        </div>
        <div className="flex-grow overflow-x-hidden overflow-y-auto">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Reception
                </div>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 1
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 2
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 3
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 4
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Hangout
                </div>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 1
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 2
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Date
                </div>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 1
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 2
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative flex flex-row items-center h-10 pr-6 text-gray-600 border-l-4 border-transparent focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500"
              >
                <span className="ml-8 text-sm tracking-wide truncate">
                  Package 3
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
