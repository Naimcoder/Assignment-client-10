import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div>
      <div className="relative z-[-1] flex flex-col py-16 lg:pb-12 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16  lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl  mb-16">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                The World’s 
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             Leading Distance 
              <br className="hidden md:block" />
             Learning Provider
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
             Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The eLearniv can offer you to enjoy the beauty of eLearning!
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  </div>

    );
};

export default Home;