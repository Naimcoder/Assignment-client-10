import React from 'react';
import { FaDownload, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";

const CoursesDetails = () => {

    const ref = React.createRef();
    const singleCourses =useLoaderData()
    const {id,name,title,author,image,details}=singleCourses

    return (


  <div>
     <h2 className='py-5 text-2xl font-semibold text-center'>Course: {name}</h2>
  <div className="sm:max-w-xl lg:w-8/12 mx-auto lg:p-15 p-6 overflow-hidden rounded-lg my-5 bg-white shadow-xl dark:text-gray-100">
	<article  ref={ref}>
    <img className='mx-auto' src={image} alt="" />
    <div className='flex justify-between items-center'>
	  <h2 className="text-xl font-bold">{title}</h2>
    {/* react to pdf start */}
   <div>


    <ReactToPdf x={20}
        y={20} className='pl-30' targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center' onClick={toPdf}> <FaDownload></FaDownload></button>
        )}
    </ReactToPdf>
   </div>
    </div>
		<p  className="mt-4  dark:text-gray-400">{details}</p>
		<div className="flex items-center mt-8 space-x-4">
             <span className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center'><FaUser></FaUser></span>
			<div>
               <p>Author:-</p>
				<h3 className="text-sm font-medium">{author.name}</h3>
				<time datetime="2021-02-18" className="text-sm dark:text-gray-400">{author.published_date}</time>
			</div>
            <Link to={`/checkout/${id}`}>
             <button className='btn lg:ml-32 sm:ml-15 lg:px-5 text-white lg:text-lg lg:font-bold bg-blue-600 py-2 lg:px-10   rounded shadow-lg'>Get premium</button>
            </Link>
		</div>
	</article>
  <div className="text-center">
  </div>
  </div>
 </div>
    );
};

export default CoursesDetails;