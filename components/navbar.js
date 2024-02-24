import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="bg-amber-700 p-4">
      <ul className="flex justify-center">
        <li className="mr-6">
          <Link href="/">
            <p className="text-yellow-50 hover:text-yellow-300">Home</p>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about">
            <p className="text-yellow-50 hover:text-yellow-300">About</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="text-yellow-50 hover:text-yellow-300">Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
