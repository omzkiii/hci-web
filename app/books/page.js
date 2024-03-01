"use client"
import React, { useState } from 'react';
import Modal from '../../components/modal';

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 10.99,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'The story of young Scout Finch and her father, lawyer Atticus Finch, who defends a black man accused of raping a white woman.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 12.99,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'The story of Elizabeth Bennet and her family, focusing on the themes of love, class, and reputation.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 9.99,
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel set in a totalitarian society where the government constantly surveils its citizens.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 11.99,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'The story of Holden Caulfield, a young man struggling with the phoniness of the adult world.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 10.49,
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    description: 'A group of boys stranded on a deserted island who descend into savagery, exploring themes of civilization and human nature.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 9.79,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'The prelude to the epic fantasy series The Lord of the Rings, following the adventures of Bilbo Baggins.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 14.99,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    description: 'The story of Jane Eyre, an orphan who becomes a governess and falls in love with her employer, Mr. Rochester.',
    image: 'https://fakeimg.pl/450x700/c3edbe/000000?text=Cover&font=museo',
    price: 11.49,
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
    <div className="container font-sans mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10" >
        {books.map((book, index) => (
          <div key={index} className="border rounded-lg overflow-hidden" onClick={() => openModal(book)} >
            <img src={book.image} alt={book.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-500">{book.author}</p>
              <p className="text-black">PHP {book.price}</p>
              <button
                className=" relative bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
              >
                Buy
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
