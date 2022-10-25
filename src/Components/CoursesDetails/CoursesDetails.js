import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const singleCourses =useLoaderData()
    const {name,title,author,image,details}=singleCourses
    console.log(singleCourses)
    return (
        <div>
            <h2 className='py-5 text-2xl font-semibold text-center'>Course: {name}</h2>
            <div className="sm:max-w-xl lg:w-8/12 mx-auto lg:p-15 p-6 overflow-hidden rounded-lg my-5 bg-white shadow-lg dark:text-gray-100">
	<article>
        <img className='mx-auto' src={image} alt="" />
		<h2 className="text-xl font-bold">{title}</h2>
		<p className="mt-4 dark:text-gray-400">{details}</p>
		<div className="flex items-center mt-8 space-x-4">
            <span className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center'><FaUser></FaUser></span>
			<div>
                <p>Author:-</p>
				<h3 className="text-sm font-medium">{author.name}</h3>
				<time datetime="2021-02-18" className="text-sm dark:text-gray-400">{author.published_date}</time>
			</div>
            <Link to='/checkout'>
             <button className=''>Get premium</button>
            </Link>
		</div>
	</article>
</div>
        </div>
    );
};

export default CoursesDetails;