import React from 'react';

const FeaturedBooks = () => {
  return (
    <div className="bg-amber-200 p-8 text-white text-center drop-shadow-xl stroke-black stroke-2 rounded-2xl"> 
      <h2 className="text-3xl font-bold text-amber-900 mb-2">Featured Books</h2>
      <div className="flex justify-center drop-shadow-lg">
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
      <div className="mt-12">
        <h2 className="text-3xl text-amber-900 font-bold mb-2 drop-shadow-md">Recommended Books</h2>
        <div className="flex justify-center drop-shadow-lg">
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
  const backgroundImageStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  };
  
  return (
    <div style={backgroundImageStyle}>
    <div className='flex flex-row h-screen py-24 backdrop-blur-sm' >
    <div className="relative text-left px-36 drop-shadow-2xl">
      <h1 className="text-9xl text-amber-100 mb-4 drop-shadow-2xl">Prometheus</h1>
      <p className="text-3xl text-amber-100">Your ultimate destination for great reads!</p>
    </div>
      <FeaturedBooks/>
    </div>
    </div>
  );
};

export default LandingPage;
