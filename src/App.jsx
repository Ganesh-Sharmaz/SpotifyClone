import { useState } from 'react'
import "./index.css"
import {NavbarDark} from '../components/NavbarDark'
import "/public/listening.png"


function App() {
  

  return (
    <>
    <navbar>
    <header className=" bg-slate-800 shadow-2xl">
    <div className="container mx-auto px-4 py-4 flex items-center">
      {/* logo */}
      <div className="mr-auto md:w-48 flex-shrink-0 flex flex-row items-center  gap-2">
        <img
          className=" h-10 md:h-14 brightness-125 "
          src="listening.png"
          alt=""
        />
        <p className="text-xl md:text-2xl font-bold text-white">TuneHub</p>
      </div>
      {/* search */}
      <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
        
        <input
          className="p-4 mr-4  border-gray-300 bg-transparent font-semibold text-sm pl-4 w-full"
          type="text"
          placeholder="I'm searching for ..."
        />
        <button><svg
          className="ml-auto h-5 px-4 text-gray-500"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          />
        </svg>
        </button>
      </div>
      
      {/* buttons */}
      <nav className="contents  ">
      <ul className=" px-3 flex items-center mr-4 lg:mr-6 xl:mr-8">
  <li className="p-1">
    <a
      href=""
      className="inline-block rounded-full p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    >
      <svg
        className="h-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="twitter"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        />
      </svg>
    </a>
  </li>
  <li className="p-2">
    <a
      href=""
      className="inline-block rounded-full p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    >
      <svg
        className="h-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook-f"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        />
      </svg>
    </a>
  </li>
  <li className="p-2">
    <a
      href=""
      className="inline-block rounded-full p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    >
      <svg
        className="h-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="linkedin-in"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        />
      </svg>
    </a>
  </li>
  <li className="p-2">
    <a
      href=""
      className="inline-block rounded-full  p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    >
      <svg
        className="h-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="instagram"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        
      >
        <path
          fill="currentColor"
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        />
      </svg>
    </a>
  </li>
  <li className=' pt-2'>
                      <a href="https://github.com/Ganesh-Sharmaz/" className=" text-black  hover:text-sky-400 transition" >
                      <button>
                        <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class=" mb-1 scale-75 w-8 hover:scale-125 duration-200 hover:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </button>
                        
                      </a>
                  </li>
  
</ul>

      </nav>
      {/* cart count */}
      
    </div>
    <hr />
  </header>
    </navbar>
    
    

    
    

    

    </>
  )
}

export default App
