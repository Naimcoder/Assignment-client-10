import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
           <div className='lg:w-4/12 lg:p-10 sm:mb-6 container lg:my-20 rounded  mx-auto  bg-red-300 p-5'>
           <h3 className="lg:text-center  mb-4 lg:text3xl font-bold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign In
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                    htmlFor="email"
                     className="text-2xl inline-block mb-1 font-medium"
                    >
                     E-mail
                    </label>
                    <input
                      placeholder="Your Email Address"
                      required
                      type="text"
                      className="text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                   <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="text-2xl inline-block mb-1 font-medium"
                    >
                     Password
                    </label>
                    <input
                      placeholder="Enter Your Password"
                      required
                      type="password"
                      className="text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="text-xl inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </button>
                     <div className='text-2xl py-3 flex font-bold justify-between '>
                       
                        <p className="text-xl  text-gray-600 sm:text-sm">
                          New User In Webside ? <Link className=' underline  text-cyan-500' to='/register'>Please Register</Link>
                         </p>
                   <p className='text-xl underline text-blue-600 underline-offset-1'>Forget Password</p>
                     </div>
                  </div>
                 
                  
                </form>
        </div>
    );
        </div>
    );
};

export default Login;