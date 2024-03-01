import React from 'react';
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/400.css"; 
import "@fontsource/libre-baskerville/400-italic.css"; 


const FeaturedBooks = () => {
  return (
    <div className="absolute left-0 right-0 bg-amber-500 p-4 text-white text-center transform translate-y-96 transition duration-500 ease-in-out hover:translate-y-60 overflow-auto ">
      <h2 className="text-2xl font-bold mb-2">Featured Books</h2>
      <div className="flex justify-center">
        <img
          src="https://www.readersdigest.co.uk/media/Slaughterhouse-Five-2.jpg"
          alt="Featured Books"
          className="w-64 h-64 px-4 object-contain"
        />
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
          alt="Featured Books"
          className="w-64 h-64 px-4 object-contain"
        />
        <img
          src="https://images.thenile.io/r1000/9781844132393.jpg"
          alt="Featured Books"
          className="w-64 h-64 px-4 object-contain"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Recommended Books</h2>
        <div className="flex justify-center">
          <img
            src="https://th.bing.com/th/id/OIP.mhFI3Nd75_9KE06fiw-XGAHaKN?rs=1&pid=ImgDetMain"
            alt="Recommended Books"
            className="w-64 h-64 px-4 object-contain"
          />
          <img
            src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_xlg.jpg"
            alt="Recommended Books"
            className="w-64 h-64 px-4 object-contain"
          />
          <img
            src="https://cdn2.penguin.com.au/covers/original/9781785150357.jpg"
            alt="Recommended Books"
            className="w-64 h-64 px-4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <div className="text-center relative ">
      <br />
      <br />
      <h1 className="text-5xl text-amber-700 font-bold mb-4 absolute top-36 left-0 right-0 " >Welcome to Prometheus</h1>
      <p className="text-xl text-amber-700 absolute top-52 left-0 right-0">Your ultimate destination for great reads!</p>
      <p className="text-xl text-amber-700 absolute top-64 left-0 right-0 font-bold underline"><a href="localhost:3000/books">Find Some Books Here!</a></p>
    <FeaturedBooks>
    </FeaturedBooks>
    </div>
  );
};

export default LandingPage;
