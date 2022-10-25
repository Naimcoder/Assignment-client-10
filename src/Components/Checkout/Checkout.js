import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout=useLoaderData()
    const {id,name,photo}=checkout
    return (
    <div className="max-w-xs lg:my-5 mx-auto p-6 rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-50">
	<img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:dark:text-violet-400">Get premium</span>
		<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        <button className=' font-bold btn my-3 text-center  bg-lime-500 py-2 px-5'>Buy Now</button>
	</div>
</div>
    );
};

export default Checkout;