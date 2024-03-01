import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-amber-600 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-3xl font-rye font-bold ">Prometheus</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex justify-center mr-6">
            <li className="mr-6">
              <Link href="/">
                <p className="text-white text-xl hover:text-gray-400">Home</p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/books">
                <p className="text-white text-xl hover:text-gray-400">Books</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="text-white text-xl hover:text-gray-400">About Us</p>
              </Link>
            </li>
          </ul>
          <div className="relative">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="rounded-xl px-4 py-2 text-gray-900 bg-gray-200 border-none focus:outline-none"
            />
            <button className="absolute inset-y-0 right-0 rounded-r-xl bg-amber-500 px-4 py-2 text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 1a8 8 0 016.32 13.14l5.47 5.46-1.41 1.41-5.46-5.47A8 8 0 119 1zm0 2a6 6 0 100 12A6 6 0 009 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

