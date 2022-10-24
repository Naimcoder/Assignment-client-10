import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPase = () => {
    const error = useRouteError();
  console.error(error);
    return (
 <div>
 <section className="flex items-center h-full p-16bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Oops!.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">Sorry, an unexpected error has occurred..</p>
            <p>{error.statusText || error.message}</p>
			<Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
		</div>
	</div>
    </section>
</div>
    );
};

export default ErrorPase;