import React, { useContext, useState } from 'react';
import {  FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import img from '../../logo.png'
import './Header.css'

const Header = () => {
  
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [darkMode,setDarkmode]=useState(false)

      const {user,logOut}=useContext(AuthContext);

      // logout handler 
      const handleSignOut =()=>{
       logOut()
       .then(()=>{

       })
       .catch((error)=>{
        console.error(error)
       })
      }


    return (
    <div>
        <div className={darkMode ? "light":"bg-gray-900"}>
               <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                <img src={img} alt="" />
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/home"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive?"font-medium tracking-wide text-xl capitalize  text-blue-500 transition-colors duration-200 hover:text-teal-accent-400":"font-medium tracking-wide text-xl capitalize text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  aria-label="Our product"
                  title="Our product"
                  className={({isActive})=>isActive?"font-medium tracking-wide text-xl capitalize  text-blue-500 transition-colors duration-200 hover:text-teal-accent-400":"font-medium tracking-wide text-xl capitalize text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  aria-label="About us"
                  title="About us"
                  className={({isActive})=>isActive?"font-medium tracking-wide text-xl capitalize  text-blue-500 transition-colors duration-200 hover:text-teal-accent-400":"font-medium tracking-wide text-xl capitalize text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                 FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="About us"
                  title="About us"
                  className={({isActive})=>isActive?"font-medium tracking-wide text-xl capitalize  text-blue-500 transition-colors duration-200 hover:text-teal-accent-400":"font-medium tracking-wide text-xl capitalize text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                 Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
           {
            user?.uid?<><p className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white  capitalize text-xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>{user?.displayName}</p>
            <button className='bg-white  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-2xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none' onClick={handleSignOut}>Logout</button>
            </>:<>
            <li>
              <Link
                to="/register"
                className=" bg-white  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-2xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
            </>
           }
           {user?.photoURL?<img className='w-12 rounded-full' title={user?.displayName} src={user?.photoURL} alt="" />:<span className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center'><FaUser></FaUser></span>

           }
           <li>
            <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
   	        <span></span>
            <span className="relative">
	          <input id="Toggle2" type="checkbox" onChange={()=>{setDarkmode(!darkMode)}} className="hidden peer" />
		        <div className="w-10 h-4 rounded-full shadowbg-gray-600 peer-checked bg-violet-400"></div>
		        <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1       peer-checked:right-0 peer-checked:left-auto bg-violet-400"></div>
	          </span>
            </label>
           </li>
          
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Eduvide"
                        title="Eduvide"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <img src={img} alt="" />
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/home"
                          aria-label="Our product"
                          title="Our product"
                          className={({isActive })=> isActive? "font-medium tracking-wide  text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className={({isActive })=> isActive? "font-medium tracking-wide  text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" }
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faqs"
                          aria-label="Our product"
                          title="Our product"
                          className={({isActive })=> isActive? "font-medium tracking-wide  text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" }
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="Our product"
                          title="Our product"
                          className={({isActive })=> isActive? "font-medium tracking-wide  text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" }
                        >
                          Blog
                        </NavLink>
                      </li>
                      {
                        user?.uid?<><p className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>{user?.displayName}</p>
                        <button className='bg-white  inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black  capitalize text-2xl transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none' onClick={handleSignOut}>Logout</button>
                       </>:<>
                      <li>
                        <Link
                          to="/register"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                       </>
                      }
                     {user?.photoURL?<img className='w-12 rounded-full' title={user?.displayName} src={user?.photoURL} alt="" />:<span className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center'><FaUser></FaUser></span>
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
         </div>
       </div>
      </div>
   </div>
    );
};

export default Header;