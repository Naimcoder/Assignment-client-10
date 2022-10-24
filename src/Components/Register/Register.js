import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';

const Register = () => {
  const {signinGoogle,signinGithub}=useContext(AuthContext)

  const handleSubmit=(event)=>{
  event.preventDefault()
  const from = event.target;
  const email= from.email.value;
  const password=from.password.value;
  const name=from.name.value;
  console.log(email,name,password)
  }
  const handleSignInGoogle=()=>{
        signinGoogle()
        .then((result)=>{
            const user= result.user
            console.log(user)
        })
        .catch(error=>console.log(error))
  }
  const handleSignInGithub=()=>{
    signinGithub()
    .then( result=>{
      const user= result.user;
      console.log(user)
    })
    .catch(error=>{
      console.error(error)
    })
  }
    return (
        <div className='lg:w-4/12 sm:mb-6 container lg:my-20 rounded  mx-auto  bg-red-300 p-10'>
           <h3 className="lg:text-3xl mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                 Register
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="text-xl inline-block mb-1 font-medium"
                    >
                     Name
                    </label>
                    <input
                      placeholder="Enter Your Name"
                      required
                      type="text"
                      className="text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className=" text-xl inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="Your Email Address"
                      required
                      type="text"
                      className=" text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className=" text-xl inline-block mb-1 font-medium"
                    >
                     Password
                    </label>
                    <input
                      placeholder="Enter Your Password"
                      required
                      type="password"
                      className=" text-xl flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="text-xl inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  bg-lime-300 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      REGISTER
                    </button>
                      <button
                      onClick={handleSignInGoogle}
                      type="submit"
                      className="my-5 text-xl inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  bg-blue-600 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      <FaGoogle></FaGoogle> <span className='ml-5'>Login With Google</span>
                    </button>
                    <button
                    onClick={handleSignInGithub}
                      type="submit"
                      className="text-xl inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        
                     <FaGithub/>  <span className='ml-5'>Login With GitHub</span>
                    </button>
                  </div>
                  <p className=" lg:text-xl pb-8 font-bold text-gray-600 sm:text-sm">
                   Already Have an Account ? <Link className='lg:text-1xl underline text-blue-700' to='/login'>Please Login</Link>
                  </p>
                </form>
        </div>
    );
};

export default Register;