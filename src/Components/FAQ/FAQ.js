import React from 'react';

const FAQ = () => {
    return (
<div>
   <section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col lg:text-2xl divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			{/* ------------- javascript part start ----------- */}
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">what is JavaScript?</summary>
				<div className="px-4 pb-4">
					<p>JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities</p>
				</div>
			</details>
			{/* ------------- PHP part start ----------- */}
			<details>
			 <summary className="py-2 outline-none cursor-pointer focus:underline">What is PHP?
			 </summary>
				<div className="px-4 pb-4">
					<p>PHP is a general-purpose scripting for the scripting of web developments.
                       It was originally produced in 1994 by Rasmus Lerdorf, a Danish Canadian
                       programmer. The PHP Group is now producing the PHP reference implementation.
                       PHP used to stand for Personal Home Page, now it stands for Hypertext
                       Preprocessor.
					</p>
				</div>
			</details>
			{/* ------------- Java part start ----------- */}
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline"> What is Java?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Java is a high-level, class-based, object-oriented programming language that is
                     designed to have as few implementation dependencies as possible.
					 </p>
				</div>
			</details>
			    {/* ------------- CSS part start ----------- */}
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is CSS?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
				</div>
			</details>
			  {/* ------------- Laravel part start ----------- */}
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is Laravel?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic..</p>
				</div>
			</details>
			  {/* ------------- Python part start ----------- */}
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is Python?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Python is a high-level programming language designed to be easy to read and
                       simple to implement. It is open source, which means it is free to use, even
                       for commercial applications. Python can run on Mac, Windows, and Unix
                       systems and has also been ported to Java and .NET virtual machines.
					</p>
				</div>
			</details>
		</div>
	</div>
 </section>
</div>
    );
};

export default FAQ;