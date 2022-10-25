import React from 'react';
import { Link } from 'react-router-dom';

const CouresCard = ({courses}) => {
console.log(courses)
const {id,name,details,image}= courses
    return (
        <div>
        <div className=" p-5 w-10/12 overflow-hidden transition-shadow duration-300   bg-orange-100 rounded shadow-sm">
          <img className='mx-auto rounded' src={image} alt="" />
          <div className="p-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                to="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">{}</span>
            </p>
            <Link
              to="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
             {name}
            </Link>
             <p className="mb-2 text-gray-700">
               {details.slice(0,100)}
            </p>
            <Link
              to={`/allcourse/${id}`}
              aria-label=""
              className="text-2xl text-blue-700 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        </div>
        
    );
};

export default CouresCard;