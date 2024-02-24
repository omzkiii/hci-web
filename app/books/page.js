"use client"
import React, { useState } from 'react';
import Modal from '../../components/modal';

const books = [
  {
    title: 'Book Title 1',
    author: 'Author Name 1',
    description: 'Description of Book 1',
    image: 'https://via.placeholder.com/150',
    price: 10.99,
  },
  {
    title: 'Book Title 2',
    author: 'Author Name 2',
    description: 'Description of Book 2',
    image: 'https://via.placeholder.com/150',
    price: 12.99,
  },
  // Add more book objects as needed
];

const BooksPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-500">{book.author}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                onClick={() => openModal(book)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} book={selectedBook} />
    </div>
  );
};
export default BooksPage;
