import React from "react";
import business from "../../assets/4583.jpg";

const Home = () => {
  return (
    <section className="bg-gray-800 ">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Innovative
            <span className="dark:text-orange-600">Solutions</span>for Modern
            Businesses
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            We design and develop fast, secure
            <br className="hidden md:inline lg:hidden" />
            and user-friendly web applications that bring your vision to life.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-orange-600 dark:text-gray-50"
            >
              Get Started
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={business}
            alt=""
            className="object-contain rounded-xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
