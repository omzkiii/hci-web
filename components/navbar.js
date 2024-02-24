import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-amber-700 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold">Prometheus</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex justify-center mr-6">
            <li className="mr-6">
              <Link href="/">
                <p className="text-white hover:text-gray-400">Home</p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about">
                <p className="text-white hover:text-gray-400">About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="text-white hover:text-gray-400">Contact</p>
              </Link>
            </li>
          </ul>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="rounded-full px-4 py-2 text-gray-900 bg-gray-200 border-none focus:outline-none"
            />
            <button className="ml-2 rounded bg-amber-500 px-4 py-2 text-white">Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
