import React from 'react';
import { Link } from 'react-router-dom';

const CouresCard = ({courses}) => {

console.log(courses)
const {id,name,details,image}= courses


    return (
    <div>
      <div className=" shadow-lg  mx-auto p-5 w-10/12 overflow-hidden transition-shadow duration-300    bg-orange-100  rounded">
          <img className='mx-auto rounded' src={image} alt="" />
          <div className="p-5">
            <Link
              to="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
             {name}
            </Link>
             <p className="mb-2 text-gray-700">
               {details.slice(0,97)}
            </p>
            <Link
              to={`/allcourse/${id}`}
              aria-label=""
              className="text-lg mt-5 w-full text-blue-700 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              <button className=' pointer-events-auto  uppercase bg-indigo-600 py-3 px-8  font-semibold leading-5 text-white hover:bg-indigo-500'>Details</button>
            </Link>
         </div>
       </div>
    </div>
    );
};

export default CouresCard;