// pages/about.js
import React from 'react';

const AboutPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  };
  return (
    <div className='h-screen'style={backgroundImageStyle}>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-5xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-gray-700 text-2xl mb-4">
            Founded in 1850, Prometheus Books began as a small, family-owned bookstore nestled in the heart of a bustling city. Its founder, Samuel Wainwright, was a passionate bibliophile with a vision to create a haven for book lovers and intellectuals alike.
          </p>
          <p className="text-gray-700 text-2xl mb-4">
            Initially, the bookstore focused on selling rare and antiquarian books, attracting scholars, collectors, and avid readers from far and wide. Over the years, Prometheus Books became known for its vast collection of rare manuscripts, first editions, and scholarly works, earning a reputation as a treasure trove for book enthusiasts.
          </p>
          <p className="text-gray-700 text-2xl mb-4">
            As the decades passed, Prometheus Books evolved with the times, embracing new technologies and trends in the publishing industry. In the 20th century, the bookstore expanded its offerings to include a wide range of genres, from classic literature to contemporary fiction, non-fiction, and children's books.
          </p>
          <p className="text-gray-700 text-2xl mb-4">
            Today, Prometheus Books stands as a testament to the enduring love for books and literature. It remains a beloved institution in the community, hosting book readings, author signings, and literary events that continue to inspire and delight book lovers of all ages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
