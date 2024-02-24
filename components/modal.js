// components/Modal.js

import React from 'react';

const Modal = ({ isOpen, closeModal, book }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '30vw', height: '30vh' }}>
          <div className="relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex h-full">
              <img src={book.image} alt={book.title} className="w-1/2 h-full object-cover" />
              <div className="flex flex-col justify-center p-4 w-1/2">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-500">{book.author}</p>
                <p className="text-gray-700 mt-2">{book.description}</p>
                <p className="text-gray-700 mt-2">Price: ${book.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
